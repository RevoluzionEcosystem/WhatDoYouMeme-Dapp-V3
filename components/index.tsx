import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"

import SwapContent from "./content"
import BackHomeButton from "../button/back-home"
import GoExplorerButton from "../button/go-explorer"

import general from "../../../data/lang/en/general.json"
import swap from "../../../data/lang/en/swap.json"
    
export default function Swap() {
    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <header>
                <p className="mb-2 text-sm font-semibold text-primary">
                    <Suspense fallback={
                        <Skeleton className="h-4 w-1/6 mb-1"/>
                    }>
                        {`${swap.kicker_1}`}
                    </Suspense>
                </p>
                <h1 className="block text-2xl font-bold text-foreground sm:text-3xl">
                    <Suspense fallback={
                        <Skeleton className="h-12 w-full max-w-[450px] mb-6"/>
                    }>
                        {`${swap.headline_1}`}
                    </Suspense>
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    <Suspense fallback={
                        <Skeleton className="h-6 w-3/4 mb-3"/>
                    }>
                        {`${swap.subheadline_1}.`}
                    </Suspense>
                </p>

                <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <GoExplorerButton
                        type="primary"
                        address={""}
                        text={general["terms"].view_explorer}
                    />
                    <BackHomeButton
                        type="basic"
                    />
                </div>
            </header>

            <div className="m-12" />

            <SwapContent />
        </div>
    )
}