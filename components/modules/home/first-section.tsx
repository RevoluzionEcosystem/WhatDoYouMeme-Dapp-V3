import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"
import { getCssValue } from "../../../lib/helpers"

import GetStartedButton from "../button/get-started"
import ReadWhitepaperButton from "../button/read-whitepaper"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"

export default function FirstSection() {
    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div>
                    <h1 className="block text-3xl font-bold text-foreground sm:text-4xl lg:text-6xl lg:leading-tight">
                        <Suspense fallback={
                            <div>
                                <Skeleton className="h-12 w-full mb-6"/>
                                <Skeleton className="h-12 w-full mb-6"/>
                                <Skeleton className="h-12 w-3/4 mb-6"/>
                            </div>
                        }>
                            {`${home.headline_1_1}`} <span className="text-primary">{`${home.headline_1_2}`}</span>!
                        </Suspense>
                    </h1>
                    <p className="mt-3 text-lg text-muted-foreground">
                        <Suspense fallback={
                            <div>
                                <Skeleton className="h-6 w-full mb-3"/>
                                <Skeleton className="h-6 w-3/4 mb-3"/>
                            </div>
                        }>
                            {`${home.subheadline_1}.`}
                        </Suspense>
                    </p>

                    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                        <GetStartedButton type="primary" />
                        <ReadWhitepaperButton type="box" />
                    </div>


                    <div className="mt-6 lg:mt-12">
                        <span className="text-xs font-medium text-primary uppercase">
                            <Suspense fallback={
                                <Skeleton className="h-4 w-1/2 mb-1"/>
                            }>
                                {`${home.subsection_1}`}
                            </Suspense>
                        </span>

                        <Suspense fallback={
                            <div className="mt-2 gap-x-8 gap-y-2 grid grid-cols-3">
                                <Skeleton className="h-10 w-full"/>
                                <Skeleton className="h-10 w-full"/>
                                <Skeleton className="h-10 w-full"/>
                                <Skeleton className="h-10 w-full"/>
                                <Skeleton className="h-10 w-full"/>
                                <Skeleton className="h-10 w-full"/>
                            </div>
                        }>
                            <div className="mt-2 gap-x-8 gap-y-2 grid grid-cols-3">
                                {home["logos"].map((item, index) => (
                                    <img key={`logo-${index}`} className="bg-muted rounded-md" src={getCssValue("--background") === "#FAFAFAFF" ? item["src"].dark : item["src"].light} alt={item.name} />
                                ))}
                            </div>
                        </Suspense>
                    </div>
                </div>

                <Suspense fallback={
                    <Skeleton className="h-full w-full rounded-md"/>
                }>
                    <div className="relative ml-4">
                        <img className="w-full rounded-md" src="/assets/images/wdym.webp" alt={general.project_title} />
                        <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-muted via-muted-foreground/0 to-muted-foreground/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6"></div>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}