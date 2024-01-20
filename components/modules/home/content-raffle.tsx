"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"
import { SelectSeparator } from "../../ui/select"
import { TabsContent, } from "../../ui/tabs"

import GoRaffleButton from "../button/go-raffle"

import home from "../../../data/lang/en/home.json"
import faq from "../../../data/lang/en/faq.json"
import { ScrollArea } from "../../ui/scroll-area"

export default function ContentRaffle() {
    return (
        <TabsContent value="raffle">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${home["content"]["raffle"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${home["content"]["raffle"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-2 mb-4" />
                <CardContent className="space-y-2">
                    <ScrollArea className="h-[360px] w-full rounded-md pr-2">
                        <Accordion type="single" collapsible className="w-full">
                            {faq["raffle"].map((item, index) => (
                                <AccordionItem key={`item-${index}`} value={`Q-${index}`}>
                                    <AccordionTrigger className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:hover:text-primary [&[data-state=open]>svg]:text-primary [&[data-state=open]]:text-primary [&[data-state=open]]:border-b border-foreground group p-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-foreground transition hover:text-primary hover:no-underline">
                                        {item.Q}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-3 text-muted-foreground">
                                        {item.A}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <GoRaffleButton type="primary" />
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
