"use client"

import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs"

import ContentGeneral from "./content-general"
import ContentStaking from "./content-staking"
import ContentSelf from "./content-self"

import staking from "../../../data/lang/en/staking.json"

export default function StakingContent() {
    return (
        <Tabs defaultValue="staking" className="">
            <TabsList className="grid w-full grid-cols-2 max-w-fit">
                {staking["selector"].map((item, index) => (
                    item.value !== "general" ? 
                    <TabsTrigger key={index} value={item.value}>
                        {item.title}
                    </TabsTrigger>
                    : null
                ))}
            </TabsList>
            {/**<ContentGeneral />**/}
            <ContentStaking />
            <ContentSelf />
        </Tabs>
    )
}
