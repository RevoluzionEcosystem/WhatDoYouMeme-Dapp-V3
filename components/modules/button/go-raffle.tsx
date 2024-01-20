"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Suspense } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../ui/button"
import { Skeleton } from "../../ui/skeleton"

import general from "../../../data/lang/en/general.json"

export default function GoRaffleButton({type}) {
    const router = useRouter()

    return (
        <Button
            variant={type}
            className="py-6 px-3"
            onClick={() => router.push("/raffle")}
        >
            <Suspense fallback={
                <Skeleton className="h-6 w-[150px]"/>
            }>
                {`${general["terms"].go_raffle}`} <ArrowRightIcon className="ml-2 h-4 w-4" /> 
            </Suspense>
        </Button>
    )
}