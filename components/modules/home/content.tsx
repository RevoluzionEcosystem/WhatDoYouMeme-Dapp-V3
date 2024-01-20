"use client"

import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs"

import ContentRaffle from "./content-raffle"
import ContentStaking from "./content-staking"

import home from "../../../data/lang/en/home.json"

export default function FaqContent() {
    return (
        <Tabs defaultValue="raffle" className="">
            <TabsList className="grid w-full grid-cols-2 max-w-fit">
                {home["selector"].map((item, index) => (
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <ContentRaffle />
            <ContentStaking />
        </Tabs>
    )
}
