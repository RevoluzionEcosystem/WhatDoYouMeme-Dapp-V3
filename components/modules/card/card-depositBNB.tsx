"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const contribute_bnb = staking["content"]["self"]["contribute_stake"]["contribute_bnb"]

export default function CardDepositBNB() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="depositAmount" className="text-muted-foreground">
                    {`${contribute_bnb.option1}`}
                </Label>
                <Input id="depositAmount" type="number" placeholder={`${contribute_bnb.option1_placeholder}`} min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${contribute_bnb.balance}:`} <span className="text-primary">1,000 BNB</span>
                </p>
            </div>
            <Button variant="primary">
                {`${contribute_bnb.button}`}
            </Button>
        </div>
    )
}
