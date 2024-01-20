"use client"

import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs"

import ContentStats from "./content-stats"
import ContentChart from "./content-chart"
import ContentTransactions from "./content-transactions"

import info from "../../../data/lang/en/dashboard.json"

export default function DashboardContent() {
    return (
        <Tabs defaultValue="stats" className="">
            <TabsList className="grid w-full grid-cols-3 max-w-fit">
                {info["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <ContentStats />
            <ContentChart />
            <ContentTransactions />
        </Tabs>
    )
}
