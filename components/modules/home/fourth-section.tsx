"use client"

import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"

import home from "../../../data/lang/en/home.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"
import FaqContent from "./content"

export default function FourthSection() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                            <Suspense fallback={
                                <div>
                                    <Skeleton className="h-9 w-1/2 mb-4"/>
                                    <Skeleton className="h-9 w-full mb-4"/>
                                </div>
                            }>
                                <span className="text-primary">{`${home.headline_4_1}`}</span> {`${home.headline_4_2}`}
                            </Suspense>
                        </h2>
                        <p className="mt-1 md:block text-muted-foreground">
                            <Suspense fallback={
                                <div>
                                    <Skeleton className="h-6 w-3/4 mb-3"/>
                                    <Skeleton className="h-6 w-1/4 mb-3"/>
                                </div>
                            }>
                                {`${home.subheadline_4}.`}
                            </Suspense>
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <FaqContent />
                </div>
            </div>
        </div>
    )
}