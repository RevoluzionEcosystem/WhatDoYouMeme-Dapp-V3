"use client"

import { Label } from "../../ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const claim_rewards = staking["content"]["self"]["function_stake"]["claim_rewards"]

export default function CardClaimRewards() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="stakingId" className="text-muted-foreground">
                    {`${claim_rewards.option1}`}
                </Label>
                <Select>
                    <SelectTrigger className="w-full" id="stakingId">
                        <SelectValue placeholder={`${claim_rewards.option1_placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{`${claim_rewards.option1_group}`}</SelectLabel>
                            <SelectItem value="1">Stake ID 1</SelectItem>
                            <SelectItem value="2">Stake ID 2</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="pb-3">
                <Label htmlFor="poolId" className="text-muted-foreground">
                    {`${claim_rewards.option2}`}
                </Label>
                <Select>
                    <SelectTrigger className="w-full" id="poolId">
                        <SelectValue placeholder={`${claim_rewards.option2_placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{`${claim_rewards.option2_group}`}</SelectLabel>
                            <SelectItem value="1">Pool 1</SelectItem>
                            <SelectItem value="2">Pool 2</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Button variant="primary">
                {`${claim_rewards.button}`}
            </Button>
        </div>
    )
}
