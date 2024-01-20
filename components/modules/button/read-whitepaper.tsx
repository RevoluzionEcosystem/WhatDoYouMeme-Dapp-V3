import { ReaderIcon } from "@radix-ui/react-icons"
import { Suspense } from "react"
import { Button } from "../../ui/button"
import { Skeleton } from "../../ui/skeleton"

import general from "../../../data/lang/en/general.json"

export default function ReadWhitepaperButton({type}) {
    return (
        <a
            href="https://what-do-you-meme.gitbook.io/whitepaper/overview/introduction"
            target="_blank"
        >
            <Button
                variant={type}
                className="py-6 px-3"
            >
                <Suspense fallback={
                    <Skeleton className="h-6 w-[150px]"/>
                }>
                    <ReaderIcon className="mr-2 h-4 w-4" /> {`${general["terms"].read_whitepaper}`}
                </Suspense>
            </Button>
        </a>
    )
}