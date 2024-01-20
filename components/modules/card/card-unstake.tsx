"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const unstake = staking["content"]["self"]["function_stake"]["unstake"]

export default function CardUnstake() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="stakingId" className="text-muted-foreground">
                    {`${unstake.option1}`}
                </Label>
                <Select>
                    <SelectTrigger className="w-full" id="stakingId">
                        <SelectValue placeholder={`${unstake.option1_placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{`${unstake.option1_group}`}</SelectLabel>
                            <SelectItem value="1">Stake ID 1</SelectItem>
                            <SelectItem value="2">Stake ID 2</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="pb-3">
                <Label htmlFor="unstakeAmount" className="text-muted-foreground">
                    {`${unstake.option2}`}
                </Label>
                <Input id="unstakeAmount" type="number" placeholder={`${unstake.option2_placeholder}`} min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${unstake.token_staked}:`} <span className="text-primary">1,000 WDYM</span>
                </p>
            </div>
            <Button variant="primary">
                {`${unstake.button}`}
            </Button>
        </div>
    )
}
