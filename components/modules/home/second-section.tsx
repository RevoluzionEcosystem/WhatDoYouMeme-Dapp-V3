import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"

import home from "../../../data/lang/en/home.json"

export default function SecondSection() {
    return (
        <div className="relative mt-12">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="block text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                        <Suspense fallback={
                            <Skeleton className="h-12 w-3/4 mb-6 mx-auto"/>
                        }>
                            {`${home.headline_2_1}`} <span className="text-primary">{`${home.headline_2_2}`}</span>?
                        </Suspense>
                    </h1>
                    <p className="mt-3 text-lg text-muted-foreground">
                        <Suspense fallback={
                            <Skeleton className="h-6 w-full mb-3 mx-auto"/>
                        }>
                            {`${home.subheadline_2}.`}
                        </Suspense>
                    </p>
                </div>

                <Suspense fallback={
                    <Skeleton className="w-full h-[500px] mt-10 mx-auto"/>
                }>
                    <div className="mt-10 relative max-w-5xl mx-auto">
                        <iframe className={`w-full object-cover h-100 sm:h-[480px] rounded-xl`} width="560" height="315" src="https://www.youtube.com/embed/uzIMtbdd3TM?si=OM3RZ_Mh1LEuS8Yt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}