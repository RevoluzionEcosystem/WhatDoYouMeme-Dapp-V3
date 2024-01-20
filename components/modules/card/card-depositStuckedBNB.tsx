"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const redistribute_bnb = staking["content"]["self"]["contribute_stake"]["redistribute_bnb"]

export default function CardDepositStuckedBNB() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="depositAmount" className="text-muted-foreground">
                    {`${redistribute_bnb.option1}`}
                </Label>
                <Input id="depositAmount" type="number" placeholder={`${redistribute_bnb.option1_placeholder}`} min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${redistribute_bnb.balance}:`} <span className="text-primary">1,000 BNB</span>
                </p>
            </div>
            <Button variant="primary">
                {`${redistribute_bnb.button}`}
            </Button>
        </div>
    )
}
