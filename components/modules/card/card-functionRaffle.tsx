"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"
import { SelectSeparator } from "../../ui/select"

import CardStatsRaffle from "./card-statsRaffle"
import RaffleBall from "../raffle/ball"

import general from "../../../data/lang/en/general.json"
import raffle from "../../../data/lang/en/raffle.json"

const term = general["terms"]
const data = raffle["raffle"]["data"]

export default function CardFunctionRaffle() {
    return (
        <div className="border border-border hover:border-primary rounded-xl">
            <Card>
                <CardHeader>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <CardTitle>
                                Raffle #42
                            </CardTitle>
                            <CardDescription>
                                Draw on Monday, 30 October 2023 at 8:45 pm
                            </CardDescription>
                        </div>
                        <div className="lg:flex text-left lg:text-right text-sm font-light text-muted-foreground items-center lg:justify-end justify-start">
                            <p>
                                {`${term.prize_pot}:`}
                            </p>
                            <span className="text-3xl font-bold text-primary lg:ml-2">
                                333,333 WDYM
                            </span>
                        </div>
                    </div>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div className="grid grid-cols-6">
                        <RaffleBall number={4}/>
                        <RaffleBall number={6}/>
                        <RaffleBall number={7}/>
                        <RaffleBall number={4}/>
                        <RaffleBall number={2}/>
                        <RaffleBall number={1}/>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`Details`}>
                            <AccordionTrigger className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:hover:text-primary [&[data-state=open]>svg]:text-primary [&[data-state=open]]:text-primary [&[data-state=open]]:border-b border-foreground group p-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-foreground transition hover:text-primary hover:no-underline">
                                {`More Details`}
                            </AccordionTrigger>
                            <AccordionContent className="p-3 text-muted-foreground">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {data.map((item, index) => (
                                        <CardStatsRaffle
                                            key={`card-${index}`}
                                            index={index}
                                            item={item}
                                        />
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </div>
    )
}
