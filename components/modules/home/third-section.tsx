"use client"

import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"

import CategoryOption from "./category-option"

import home from "../../../data/lang/en/home.json"

export default function ThirdSection() {
    const router = useRouter()

    return (
        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl text-center mx-auto mb-12">
                <h1 className="block text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                    <Suspense fallback={
                        <Skeleton className="h-12 w-3/4 mb-6 mx-auto"/>
                    }>
                        {`${home.headline_3_1}`} <span className="text-primary">{`${home.headline_3_2}`}</span>?
                    </Suspense>
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    <Suspense fallback={
                        <div>
                            <Skeleton className="h-6 w-full mb-3 mx-auto"/>
                            <Skeleton className="h-6 w-1/4 mb-3 mx-auto"/>
                        </div>
                    }>
                        {`${home.subheadline_3}.`}
                    </Suspense>
                </p>
            </div>
            <div className="grid sm:grid-cols-12 gap-6">
                <div className="group sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3 cursor-pointer" onClick={() => router.push("/raffle")}>
                    <CategoryOption
                        name={home["involve"]["raffle"].name}
                        image={home["involve"]["raffle"].image}
                        description={home["involve"]["raffle"].description}
                        className="text-sm font-bold text-foreground rounded-lg bg-background group-hover:bg-primary group-hover:text-primary-foreground p-4 md:text-xl"
                    />
                </div>

                <div className="group sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3 cursor-pointer" onClick={() => router.push("/governance")}>
                    <CategoryOption
                        name={home["involve"]["governance"].name}
                        image={home["involve"]["governance"].image}
                        description={home["involve"]["governance"].description}
                        className="text-sm font-bold text-foreground rounded-lg bg-background p-4 group-hover:bg-primary group-hover:text-primary-foreground md:text-xl"
                    />
                </div>

                <div className="group col-span-12 md:col-span-4 cursor-pointer" onClick={() => router.push("/staking")}>
                    <CategoryOption
                        name={home["involve"]["staking"].name}
                        image={home["involve"]["staking"].image}
                        description={home["involve"]["staking"].description}
                        className="text-sm font-bold text-foreground rounded-lg bg-background group-hover:bg-primary group-hover:text-primary-foreground p-4 md:text-xl"
                    />
                </div>

                <a className="group col-span-12 sm:col-span-6 md:col-span-4 cursor-pointer" href="https://www.youtube.com/channel/UCsa2z6wT5gX72ISbSy6NlNA" target="_blank">
                    <CategoryOption
                        name={home["involve"]["youtube"].name}
                        image={home["involve"]["youtube"].image}
                        description={home["involve"]["youtube"].description}
                        className="text-sm font-bold text-foreground rounded-lg bg-background group-hover:bg-primary group-hover:text-primary-foreground p-4 md:text-xl"
                    />
                </a>
                    
                <a className="group col-span-12 sm:col-span-6 md:col-span-4 cursor-pointer" href="https://t.me/whatdoyoumeme_portal" target="_blank">
                    <CategoryOption
                        name={home["involve"]["community"].name}
                        image={home["involve"]["community"].image}
                        description={home["involve"]["community"].description}
                        className="text-sm font-bold text-foreground rounded-lg bg-background group-hover:bg-primary group-hover:text-primary-foreground p-4 md:text-xl"
                    />
                </a>
            </div>
        </div>
    )
}