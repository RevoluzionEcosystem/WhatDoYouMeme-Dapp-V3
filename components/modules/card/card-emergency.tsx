"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const emergency_withdraw = staking["content"]["self"]["function_stake"]["emergency_withdraw"]

export default function CardEmergency() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="stakingId" className="text-muted-foreground">
                    {`${emergency_withdraw.option1}`}
                </Label>
                <Select defaultValue={"1"}>
                    <SelectTrigger className="w-full" id="stakingId">
                        <SelectValue placeholder={`${emergency_withdraw.option1_placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>{`${emergency_withdraw.option1_group}`}</SelectLabel>
                            <SelectItem value="1">Stake ID 1</SelectItem>
                            <SelectItem value="2">Stake ID 2</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="pb-3">
                <Label htmlFor="withdrawAmount" className="text-muted-foreground">
                    {`${emergency_withdraw.option2}`}
                </Label>
                <Input id="withdrawAmount" type="number" placeholder="Enter amount to withdraw" min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${emergency_withdraw.token_staked}:`} <span className="text-primary">1,000 WDYM</span>
                </p>
            </div>
            <Button variant="primary">
                {`${emergency_withdraw.button}`}
            </Button>
        </div>
    )
}
