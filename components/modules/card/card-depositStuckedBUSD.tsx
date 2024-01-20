"use client"

import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const redistribute_busd = staking["content"]["self"]["contribute_stake"]["redistribute_busd"]

export default function CardDepositStuckedBUSD() {
    return (
        <div>
            <div className="pb-3">
                <Label htmlFor="depositAmount" className="text-muted-foreground">
                    {`${redistribute_busd.option1}`}
                </Label>
                <Input id="depositAmount" type="number" placeholder={`${redistribute_busd.option1_placeholder}`} min={1} />
                <p className="text-sm font-regular text-muted-foreground mt-2">
                    {`${redistribute_busd.balance}:`} <span className="text-primary">1,000 BUSD</span>
                </p>
            </div>
            <Button variant="primary">
                {`${redistribute_busd.button}`}
            </Button>
        </div>
    )
}
