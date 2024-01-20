"use client"

import { useEffect, useState } from "react"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default function Transactions() {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState([])
    const timer = loaded ? (15 * 1000) : (500)

    useEffect(() => {
        const check = async () => {
            const res = await fetch(`/dashboard/api/transaction?network=bsc&address=0x74bcDDb40A6Dc5A4ef80133f1247891615499f92`, {
                next: {
                    revalidate: 60
                }
            })
            const result = await res.json()
            
            setData(result["result"]["data"])

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
        <div>
            <DataTable data={data} columns={columns} />
        </div>
    )
}