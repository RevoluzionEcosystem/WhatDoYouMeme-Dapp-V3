"use client"

import { useState } from "react"
import { ChartingLibraryWidgetOptions, ResolutionString } from "../../../public/static/charting_library/charting_library"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { TabsContent, } from "../../../components/ui/tabs"
import { SelectSeparator } from "../../ui/select"

import Script from "next/script"

import dynamic from "next/dynamic"

import dashboard from "../../../data/lang/en/dashboard.json"

export default function ContentChart() {
    const [isScriptReady, setIsScriptReady] = useState(false)

    const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
        symbol: `bsc_0x74bcDDb40A6Dc5A4ef80133f1247891615499f92`,
        interval: "1" as ResolutionString,
        library_path: "/static/charting_library/",
        locale: "en",
        fullscreen: false,
        autosize: true,
        height: 600
    }
      
    const TVChartContainer = dynamic(
        () => import("./chart/chart-container").then((mod) => mod.TVChartContainer),
        { ssr: false }
    )

    return (
        <TabsContent value="chart">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${dashboard["content"]["chart"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${dashboard["content"]["chart"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <div>
                        <Script
                            src="/static/datafeeds/udf/dist/bundle.js"
                            strategy="lazyOnload"
                            onReady={() => {
                                setIsScriptReady(true)
                            }}
                        />
                        {isScriptReady && <TVChartContainer network="bsc" address="0x74bcDDb40A6Dc5A4ef80133f1247891615499f92" {...defaultWidgetProps} />}
                    </div>
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}