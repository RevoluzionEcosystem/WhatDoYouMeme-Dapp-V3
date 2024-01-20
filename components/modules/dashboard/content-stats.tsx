"use client"

import { readContract } from "@wagmi/core"
import { formatUnits } from "viem"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { TabsContent, } from "../../../components/ui/tabs"
import { SelectSeparator } from "../../ui/select"
import { config } from "../../../context/config"
import { tokenAbi } from "../../../data/abi/tokenAbi"
import { nFormatter } from "../../../lib/helpers"

import CardStats from "../card/card-stats-dashboard"

import dashboard from "../../../data/lang/en/dashboard.json"

const data = dashboard["content"]["stats"]["data"]

export default function ContentStats() {
    const [loaded, setLoaded] = useState(false)
    const [totalSupply, setTotalSupply] = useState<any>(null)
    const [circulatingSupply, setCirculatingSupply] = useState<any>(null)
    const [burnedSupply, setBurnedSupply] = useState<any>(null)
    const [liquiditySupply, setLiquiditySupply] = useState<any>(null)
    const [liquidityAvailable, setLiquidityAvailable] = useState<any>(null)
    const [swapEnabled, setSwapEnabled] = useState<any>(null)
    const [feeActive, setFeeActive] = useState<any>(null)
    const [feeLocked, setFeeLocked] = useState<any>(null)
    const [buyFeeLaunchpad, setBuyFeeLaunchpad] = useState<any>(null)
    const [buyFeeLiquidity, setBuyFeeLiquidity] = useState<any>(null)
    const [sellFeeLaunchpad, setSellFeeLaunchpad] = useState<any>(null)
    const [sellFeeLiquidity, setSellFeeLiquidity] = useState<any>(null)
    const [transferFeeLaunchpad, setTransferFeeLaunchpad] = useState<any>(null)
    const [transferFeeLiquidity, setTransferFeeLiquidity] = useState<any>(null)
    const [totalBuyFee, setTotalBuyFee] = useState<any>(null)
    const [totalSellFee, setTotalSellFee] = useState<any>(null)
    const [totalTransferFee, setTotalTransferFee] = useState<any>(null)
    const [swapThreshold, setSwapThreshold] = useState<any>(null)
    const [launchpadTotalCollected, setLaunchpadTotalCollected] = useState<any>(null)
    const [launchpadTotalRedeemed, setLaunchpadTotalRedeemed] = useState<any>(null)
    const [liquidityTotalCollected, setLiquidityTotalCollected] = useState<any>(null)
    const [liquidityTotalRedeemed, setLiquidityTotalRedeemed] = useState<any>(null)
    const [totalCollected, setTotalCollected] = useState<any>(null)
    const [totalRedeemed, setTotalRedeemed] = useState<any>(null)
    const timer = loaded ? (15 * 1000) : (100)

    useEffect(() => {
        const check = async () => {
            const resTotalSupply = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "totalSupply",
            })
            const resCirculatingSupply = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "circulatingSupply",
            })
            const resBurnedSupply = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "balanceOf",
                args: [
                    "0x000000000000000000000000000000000000dEaD"
                ]
            })
            const resLiquiditySupply = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "balanceOf",
                args: [
                    "0x74bcDDb40A6Dc5A4ef80133f1247891615499f92"
                ]
            })
            const resSwapEnabled = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "isSwapEnabled",
            })
            const resFeeActive = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "isFeeActive",
            })
            const resFeeLocked = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "isFeeLocked",
            })
            const resBuyFeeLaunchpad = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "buyLaunchpadFee",
            })
            const resBuyFeeLiquidity = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "buyLiquidityFee",
            })
            const resSellFeeLaunchpad = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "sellLaunchpadFee",
            })
            const resSellFeeLiquidity = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "sellLiquidityFee",
            })
            const resTransferFeeLaunchpad = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "transferLaunchpadFee",
            })
            const resTransferFeeLiquidity = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "sellLiquidityFee",
            })
            const resSwapThreshold = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "minSwap",
            })
            const resLaunchpadTotalCollected = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "launchpadFeeCollected",
            })
            const resLaunchpadTotalRedeemed = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "launchpadFeeRedeemed",
            })
            const resLiquidityTotalCollected = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "liquidityFeeCollected",
            })
            const resLiquidityTotalRedeemed = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "liquidityFeeRedeemed",
            })
            const resTotalCollected = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "totalFeeCollected",
            })
            const resTotalRedeemed = await readContract(config, {
                abi: tokenAbi,
                address: "0x769c6F0C5c2BcD1B76638BD58e5350f5c94128F3",
                functionName: "totalFeeRedeemed",
            })      
            
            setTotalSupply(formatUnits(resTotalSupply as bigint, 18))
            setCirculatingSupply(formatUnits(resCirculatingSupply as bigint, 18))
            setBurnedSupply(formatUnits(resBurnedSupply as bigint, 18))
            setLiquiditySupply(formatUnits(resLiquiditySupply as bigint, 18))
            setLiquidityAvailable(resLiquiditySupply > 0 ? "True" : "False")
            setSwapEnabled(resSwapEnabled ? "True" : "False")
            setFeeActive(resFeeActive ? "True" : "False")
            setFeeLocked(resFeeLocked ? "True" : "False")
            setBuyFeeLaunchpad(formatUnits(resBuyFeeLaunchpad as bigint, 2))
            setBuyFeeLiquidity(formatUnits(resBuyFeeLiquidity as bigint, 2))
            setSellFeeLaunchpad(formatUnits(resSellFeeLaunchpad as bigint, 2))
            setSellFeeLiquidity(formatUnits(resSellFeeLiquidity as bigint, 2))
            setTransferFeeLaunchpad(formatUnits(resTransferFeeLaunchpad as bigint, 2))
            setTransferFeeLiquidity(formatUnits(resTransferFeeLiquidity as bigint, 2))
            setTotalBuyFee(formatUnits((resBuyFeeLaunchpad + resBuyFeeLiquidity) as bigint, 2))
            setTotalSellFee(formatUnits((resSellFeeLaunchpad + resSellFeeLiquidity) as bigint, 2))
            setTotalTransferFee(formatUnits((resTransferFeeLaunchpad+ resTransferFeeLiquidity) as bigint, 2))
            setSwapThreshold(formatUnits(resSwapThreshold as bigint, 18))
            setLaunchpadTotalCollected(formatUnits(resLaunchpadTotalCollected as bigint, 18))
            setLaunchpadTotalRedeemed(formatUnits(resLaunchpadTotalRedeemed as bigint, 18))
            setLiquidityTotalCollected(formatUnits(resLiquidityTotalCollected as bigint, 18))
            setLiquidityTotalRedeemed(formatUnits(resLiquidityTotalRedeemed as bigint, 18))
            setTotalCollected(formatUnits(resTotalCollected as bigint, 18))
            setTotalRedeemed(formatUnits(resTotalRedeemed as bigint, 18))

            if (!loaded) {
                setLoaded(true)
            }
        }
        const dataInterval = setInterval(check, timer)
        
        return () => {
            clearInterval(dataInterval)
        }
    }, [loaded])

    return (
        <TabsContent value="stats">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${dashboard["content"]["stats"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${dashboard["content"]["stats"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <CardStats
                            title={data["totalSupply"].title}
                            tooltip={data["totalSupply"].tooltip}
                            value={nFormatter(totalSupply, 5)}
                        />
                        <CardStats
                            title={data["circulatingSupply"].title}
                            tooltip={data["circulatingSupply"].tooltip}
                            value={nFormatter(circulatingSupply, 5)}
                        />
                        <CardStats
                            title={data["burnedSupply"].title}
                            tooltip={data["burnedSupply"].tooltip}
                            value={nFormatter(burnedSupply, 5)}
                        />
                        <CardStats
                            title={data["liquiditySupply"].title}
                            tooltip={data["liquiditySupply"].tooltip}
                            value={nFormatter(liquiditySupply, 5)}
                        />
                        <CardStats
                            title={data["liquidityAvailable"].title}
                            tooltip={data["liquidityAvailable"].tooltip}
                            value={liquidityAvailable}
                        />
                        <CardStats
                            title={data["swapEnabled"].title}
                            tooltip={data["swapEnabled"].tooltip}
                            value={swapEnabled}
                        />
                        <CardStats
                            title={data["feeActive"].title}
                            tooltip={data["feeActive"].tooltip}
                            value={feeActive}
                        />
                        <CardStats
                            title={data["feeLocked"].title}
                            tooltip={data["feeLocked"].tooltip}
                            value={feeLocked}
                        />
                        <CardStats
                            title={data["buyFeeLaunchpad"].title}
                            tooltip={data["buyFeeLaunchpad"].tooltip}
                            value={`${nFormatter(buyFeeLaunchpad, 2)} %`}
                        />
                        <CardStats
                            title={data["buyFeeLiquidity"].title}
                            tooltip={data["buyFeeLiquidity"].tooltip}
                            value={`${nFormatter(buyFeeLiquidity, 2)} %`}
                        />
                        <CardStats
                            title={data["sellFeeLaunchpad"].title}
                            tooltip={data["sellFeeLaunchpad"].tooltip}
                            value={`${nFormatter(sellFeeLaunchpad, 2)} %`}
                        />
                        <CardStats
                            title={data["sellFeeLiquidity"].title}
                            tooltip={data["sellFeeLiquidity"].tooltip}
                            value={`${nFormatter(sellFeeLiquidity, 2)} %`}
                        />
                        <CardStats
                            title={data["transferFeeLaunchpad"].title}
                            tooltip={data["transferFeeLaunchpad"].tooltip}
                            value={`${nFormatter(transferFeeLaunchpad, 2)} %`}
                        />
                        <CardStats
                            title={data["transferFeeLiquidity"].title}
                            tooltip={data["transferFeeLiquidity"].tooltip}
                            value={`${nFormatter(transferFeeLiquidity, 2)} %`}
                        />
                        <CardStats
                            title={data["totalBuyFee"].title}
                            tooltip={data["totalBuyFee"].tooltip}
                            value={`${nFormatter(totalBuyFee, 2)} %`}
                        />
                        <CardStats
                            title={data["totalSellFee"].title}
                            tooltip={data["totalSellFee"].tooltip}
                            value={`${nFormatter(totalSellFee, 2)} %`}
                        />
                        <CardStats
                            title={data["totalTransferFee"].title}
                            tooltip={data["totalTransferFee"].tooltip}
                            value={`${nFormatter(totalTransferFee, 2)} %`}
                        />
                        <CardStats
                            title={data["swapThreshold"].title}
                            tooltip={data["swapThreshold"].tooltip}
                            value={nFormatter(swapThreshold, 5)}
                        />
                        <CardStats
                            title={data["launchpadTotalCollected"].title}
                            tooltip={data["launchpadTotalCollected"].tooltip}
                            value={nFormatter(launchpadTotalCollected, 5)}
                        />
                        <CardStats
                            title={data["launchpadTotalRedeemed"].title}
                            tooltip={data["launchpadTotalRedeemed"].tooltip}
                            value={nFormatter(launchpadTotalRedeemed, 5)}
                        />
                        <CardStats
                            title={data["liquidityTotalCollected"].title}
                            tooltip={data["liquidityTotalCollected"].tooltip}
                            value={nFormatter(liquidityTotalCollected, 5)}
                        />
                        <CardStats
                            title={data["liquidityTotalRedeemed"].title}
                            tooltip={data["liquidityTotalRedeemed"].tooltip}
                            value={nFormatter(liquidityTotalRedeemed, 5)}
                        />
                        <CardStats
                            title={data["totalCollected"].title}
                            tooltip={data["totalCollected"].tooltip}
                            value={nFormatter(totalCollected, 5)}
                        />
                        <CardStats
                            title={data["totalRedeemed"].title}
                            tooltip={data["totalRedeemed"].tooltip}
                            value={nFormatter(totalRedeemed, 5)}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
