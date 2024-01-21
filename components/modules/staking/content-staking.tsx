"use client"

import { readContract } from "@wagmi/core"
import { useEffect, useState } from "react"
import { formatUnits } from "viem"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { TabsContent } from "../../ui/tabs"
import { SelectSeparator } from "../../ui/select"
import { config } from "../../../context/config"
import { stakingAbi } from "../../../data/abi/stakingAbi"
import { nFormatter } from "../../../lib/helpers"

import CardStats from "../card/card-stats-staking"

import staking from "../../../data/lang/en/staking.json"
import CardFunctionStaking from "../card/card-functionStaking"

const data = staking["content"]["staking"]["data"]

export default function ContentStaking() {
    const [loaded, setLoaded] = useState(false)
    const [totalAmountStaked, setTotalAmountStaked] = useState<any>(null)
    const [totalAmountDistributed, setTotalAmountDistributed] = useState<any>(null)
    const [totalAmountDeposited, setTotalAmountDeposited] = useState<any>(null)
    const [amountToRedistribute, setAmountToRedistribute] = useState<any>(null)
    const [stakeTiers, setStakeTiers] = useState<any>(null)
    const [penaltyAmount, setPenaltyAmount] = useState<any>(null)
    const [penaltyEnabled, setPenaltyEnabled] = useState<any>(null)
    const [emergencyWithdraw, setEmergencyWithdraw] = useState<any>(null)
    const timer = loaded ? (15 * 1000) : (100)

    useEffect(() => {
        const check = async () => {
            const resTotalAmountStaked = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "totalStaked",
            })
            const resTotalAmountDistributed = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "totalDistributed",
            })
            const resTotalAmountDeposited = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "totalRewards",
            })
            const resAmountToRedistribute = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "amountToRedistribute",
            })
            const resStakeTiers = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "stakeType",
            })
            const resPenaltyAmount = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "penaltyPercentage",
            })
            const resPenaltyEnabled = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "takePenalty",
            })
            const resEmergencyWithdraw = await readContract(config, {
                abi: stakingAbi,
                address: "0x49d647045c41Af232F2A5214Eea4545E17248967",
                functionName: "emergencyWithdraw",
            })
            
            setTotalAmountStaked(formatUnits(resTotalAmountStaked as bigint, 18))
            setTotalAmountDistributed(formatUnits(resTotalAmountDistributed as bigint, 18))
            setTotalAmountDeposited(formatUnits(resTotalAmountDeposited as bigint, 18))
            setAmountToRedistribute(formatUnits(resAmountToRedistribute as bigint, 18))
            setStakeTiers(formatUnits(resStakeTiers as bigint, 0))
            setPenaltyAmount(formatUnits(resPenaltyAmount as bigint, 2))
            setPenaltyEnabled(resPenaltyEnabled ? "True" : "False")
            setEmergencyWithdraw(resEmergencyWithdraw ? "True" : "False")

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
        <TabsContent value="staking">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${staking["content"]["staking"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${staking["content"]["staking"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <CardStats
                            title={data["totalAmountStaked"].title}
                            tooltip={data["totalAmountStaked"].tooltip}
                            value={`${nFormatter(totalAmountStaked, 5)}`}
                        />
                        <CardStats
                            title={data["totalAmountDistributed"].title}
                            tooltip={data["totalAmountDistributed"].tooltip}
                            value={`${nFormatter(totalAmountDistributed, 5)}`}
                        />
                        <CardStats
                            title={data["totalAmountDeposited"].title}
                            tooltip={data["totalAmountDeposited"].tooltip}
                            value={`${nFormatter(totalAmountDeposited, 2)}`}
                        />
                        <CardStats
                            title={data["amountToRedistribute"].title}
                            tooltip={data["amountToRedistribute"].tooltip}
                            value={`${nFormatter(amountToRedistribute, 5)}`}
                        />
                        <CardStats
                            title={data["stakeTiers"].title}
                            tooltip={data["stakeTiers"].tooltip}
                            value={`${nFormatter(stakeTiers, 0)}`}
                        />
                        <CardStats
                            title={data["penaltyAmount"].title}
                            tooltip={data["penaltyAmount"].tooltip}
                            value={`${nFormatter(penaltyAmount, 2)} %`}
                        />
                        <CardStats
                            title={data["penaltyEnabled"].title}
                            tooltip={data["penaltyEnabled"].tooltip}
                            value={penaltyEnabled}
                        />
                        <CardStats
                            title={data["emergencyWithdraw"].title}
                            tooltip={data["emergencyWithdraw"].tooltip}
                            value={emergencyWithdraw}
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
