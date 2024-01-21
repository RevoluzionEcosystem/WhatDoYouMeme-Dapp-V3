"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { TabsContent } from "../../ui/tabs"
import { SelectSeparator } from "../../ui/select"

import staking from "../../../data/lang/en/staking.json"

export default function ContentGeneral() {
    return (
        <TabsContent value="general">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${staking["content"]["general"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${staking["content"]["general"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    Content
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
