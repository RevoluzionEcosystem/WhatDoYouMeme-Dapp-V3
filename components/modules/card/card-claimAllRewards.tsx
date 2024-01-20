"use client"

import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"
import { Button } from "../../ui/button"

import staking from "../../../data/lang/en/staking.json"

const all_rewards = staking["content"]["self"]["function_stake"]["all_rewards"]

export default function CardAllRewards() {
    return (
        <div>
            <p className="my-1 text-sm md:block text-muted-foreground">
                <Suspense fallback={
                    <Skeleton className="h-6 w-3/4 mb-3"/>
                }>
                    {`${all_rewards.description}.`}
                </Suspense>
            </p>
            <Button variant="primary">
                <Suspense fallback={
                    <Skeleton className="h-6 w-3/4 mb-3"/>
                }>
                    {`${all_rewards.button}`}
                </Suspense>
            </Button>
        </div>
    )
}
