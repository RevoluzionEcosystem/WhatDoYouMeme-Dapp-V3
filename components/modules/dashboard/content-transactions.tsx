import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { TabsContent, } from "../../../components/ui/tabs"
import { SelectSeparator } from "../../ui/select"

import dashboard from "../../../data/lang/en/dashboard.json"
import Transactions from "./transaction"

export default function ContentTransactions() {
    return (
        <TabsContent value="transactions">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${dashboard["content"]["transactions"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${dashboard["content"]["transactions"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <Transactions />
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
