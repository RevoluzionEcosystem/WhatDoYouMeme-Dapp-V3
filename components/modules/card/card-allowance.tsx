"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const approve_allowance = staking["content"]["self"]["function_stake"]["approve_allowance"]

export default function CardAllowance() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="smartContract" className="text-muted-foreground">
                    {`${approve_allowance.option1}`}
                </Label>
                <Select>
                    <SelectTrigger className="w-full" id="smartContract">
                        <SelectValue placeholder={`${approve_allowance.option1_placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{`${approve_allowance.option1_group}`}</SelectLabel>
                            <SelectItem value="1">Contract 1</SelectItem>
                            <SelectItem value="2">Contract 2</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="pb-3">
                <Label htmlFor="allowanceAmount" className="text-muted-foreground">
                    {`${approve_allowance.option2}`}
                </Label>
                <Input id="allowanceAmount" type="number" placeholder={`${approve_allowance.option2_placeholder}`} min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${approve_allowance.current_allowance}:`} <span className="text-primary">1,000 WDYM</span>
                </p>
            </div>
            <Button variant="primary">
                {`${approve_allowance.button}`}
            </Button>
        </div>
    )
}
