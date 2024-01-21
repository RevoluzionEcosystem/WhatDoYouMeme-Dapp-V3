"use client"

import { readContract } from "@wagmi/core"
import { formatUnits } from "viem"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { SelectSeparator } from "../../ui/select"
import { TabsContent } from "../../ui/tabs"
import { stakingAbi } from "../../../data/abi/stakingAbi"
import { config } from "../../../context/config"
import { nFormatter } from "../../../lib/helpers"

import CardStats from "../card/card-stats-staking"
import CardFunctionStaking from "../card/card-functionStaking"

import staking from "../../../data/lang/en/staking.json"
import { useAccount } from "wagmi"

const data = staking["content"]["self"]["data"]

export default function ContentSelf() {
    const { address } = useAccount()
    const [loaded, setLoaded] = useState(false)
    const [totalStaked, setTotalStaked] = useState<any>(null)
    const [totalStaking, setTotalStaking] = useState<any>(null)
    const [activeStaking, setActiveStaking] = useState<any>(null)
    const [inactiveStaking, setInactiveStaking] = useState<any>(null)
    const timer = loaded ? (15 * 1000) : (100)

    useEffect(() => {
        const check = async () => {
            const resTotalStaked = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "userTotalStakes",
                args: [
                    address
                ]
            })
            const resTotalStaking = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "userStaking",
                args: [
                    address
                ]
            })
            const resActiveStaking = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "userActiveStaking",
                args: [
                    address
                ]
            })
            const resInactiveStaking = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "userInactiveStaking",
                args: [
                    address
                ]
            })
            
            setTotalStaked(formatUnits(resTotalStaked as bigint, 18))
            setTotalStaking(formatUnits(resTotalStaking as bigint, 0))
            setActiveStaking(formatUnits(resActiveStaking as bigint, 0))
            setInactiveStaking(formatUnits(resInactiveStaking as bigint, 0))

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
        <TabsContent value="self">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${staking["content"]["self"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${staking["content"]["self"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <CardStats
                            title={data["totalStaked"].title}
                            tooltip={data["totalStaked"].tooltip}
                            value={`${nFormatter(totalStaked, 5)}`}
                        />
                        <CardStats
                            title={data["totalStaking"].title}
                            tooltip={data["totalStaking"].tooltip}
                            value={`${nFormatter(totalStaking, 0)}`}
                        />
                        <CardStats
                            title={data["activeStaking"].title}
                            tooltip={data["activeStaking"].tooltip}
                            value={`${nFormatter(activeStaking, 0)}`}
                        />
                        <CardStats
                            title={data["inactiveStaking"].title}
                            tooltip={data["inactiveStaking"].tooltip}
                            value={`${nFormatter(inactiveStaking, 0)}`}
                        />
                    </div>

                    <br />
                    
                    <CardFunctionStaking />
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
