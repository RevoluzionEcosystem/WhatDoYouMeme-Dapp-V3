import { parseFullTokenSymbol } from "../../../../lib/helpers"

const configurationData = {
    monthly_multipliers: ["1", "3", "4", "12"],
    supported_resolutions: ["1", "5", "15", "60", "240", "720", "1D"],
}

let cache = {}

export default {
    onReady: (callback) => {
        setTimeout(() => callback(configurationData))
    },
    
    searchSymbols: () => {},

    resolveSymbol: async (
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback,
        extension
    ) => {
        const params = parseFullTokenSymbol(symbolName)
        const response = await fetch(`/dashboard/api/chart?network=${params.network}&address=${params.pairAddress}`, {
            next: {
                revalidate: 15
            },
        })
        const res = await response.json()
        const symbolItem = res["result"]["data"]

        const symbolInfo = {
            ticker: symbolItem.id,
            name: symbolItem["attributes"].name,
            description: symbolItem["attributes"].name,
            type: symbolItem.type,
            session: "24x7",
            timezone: "Etc/UTC",
            exchange: "Pancakeswap V2 (BSC)",
            minmov: 1,
            pricescale: 100,
            visible_plots_set: "ohlcv",
            has_intraday: true,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: "streaming",
        }
        onSymbolResolvedCallback(symbolInfo)
    },

    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        const { from, to, firstDataRequest } = periodParams
        const params = parseFullTokenSymbol(symbolInfo.ticker)
        let data

        const cacheKey = `${params.network}_${params.pairAddress}_${resolution}`
        const cachedItem = cache[cacheKey]
        if (cachedItem && !firstDataRequest && cachedItem.timestamp + 15000 > Date.now()) {
            const bars = cachedItem.data.filter(bar => bar[0] >= from * 1000 && bar[0] < to)
            
            onHistoryCallback(bars, { noData: false })
            return
        }
        
        try {
            if (configurationData["supported_resolutions"].includes(resolution)) {
                let timing = "?"
                if (resolution === "1") {
                    timing = "/minute?aggregate=1&"
                } else if (resolution === "5") {
                    timing = "/minute?aggregate=5&"
                } else if (resolution === "15") {
                    timing = "/minute?aggregate=15&"
                } else if (resolution === "60") {
                    timing = "/hour?aggregate=1&"
                } else if (resolution === "240") {
                    timing = "/hour?aggregate=4&"
                } else if (resolution === "720") {
                    timing = "/hour?aggregate=12&"
                } else if (resolution === "1D") {
                    timing = "/hour?aggregate=1&"
                }
                const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/${params.network}/pools/${params.pairAddress}/ohlcv${timing}limit=1000`)
                const temp = await res.json()
                data = temp["data"]["attributes"]["ohlcv_list"]
            }
            
            let bars = []
            data.reverse().forEach(bar => {
                if (bar[0] < to) {
                    bars = [...bars, {
                        time: bar[0] * 1000,
                        low: bar[3],
                        high: bar[2],
                        open: bar[1],
                        close: bar[4],
                        volume: bar[5]
                    }]
                }
            })
            const mergedData = cachedItem ? [...cachedItem.data, ...bars.filter(curr => {
                const existing = cachedItem.data.find(item => item.time === curr.time)
                return !existing
            })] : bars
            
            cache[cacheKey] = {
                timestamp: Date.now(),
                lastCheck: Date.now(),
                data: mergedData
            }    
            onHistoryCallback(mergedData, { noData: false })
        } catch (error) {
            console.log("[getBars]: Get error", error)
            onErrorCallback(error)
        }
    },

    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) => {
        //console.log("[subscribeBars]: Method call with subscriberUID:", subscriberUID)
    },
    unsubscribeBars: (subscriberUID) => {
        //console.log("[unsubscribeBars]: Method call with subscriberUID:", subscriberUID)
    },
}