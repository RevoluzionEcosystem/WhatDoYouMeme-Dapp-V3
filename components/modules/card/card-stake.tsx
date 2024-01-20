"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const stake = staking["content"]["self"]["function_stake"]["stake"]

export default function CardStake() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="stakingPeriod" className="text-muted-foreground">
                    {`${stake.option1}`}
                </Label>
                <Select>
                    <SelectTrigger className="w-full" id="stakingPeriod">
                        <SelectValue placeholder={`${stake.option1_placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{`${stake.option1_group}`}</SelectLabel>
                            <SelectItem value="1">Period 1</SelectItem>
                            <SelectItem value="2">Period 2</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="pb-3">
                <Label htmlFor="stakeAmount" className="text-muted-foreground">
                    {`${stake.option2}`}
                </Label>
                <Input id="stakeAmount" type="number" placeholder={`${stake.option2_placeholder}`} min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${stake.token_balance}:`} <span className="text-primary">1,000 WDYM</span>
                </p>
            </div>
            <Button variant="primary">
                {`${stake.button}`}
            </Button>
        </div>
    )
}
