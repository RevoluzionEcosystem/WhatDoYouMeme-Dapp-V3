import { OpenInNewWindowIcon } from "@radix-ui/react-icons"
import { Suspense } from "react"
import { Button } from "../../ui/button"
import { Skeleton } from "../../ui/skeleton"

export default function GoExplorerButton({type, address, text}) {
    return (
        <a
            href={`https://bscscan.com/address/${address}#code`}
            target="_blank"
        >
            <Button
                variant={type}
                className="py-6 px-3"
            >
                <Suspense fallback={
                    <Skeleton className="h-6 w-[150px]"/>
                }>
                    <OpenInNewWindowIcon className="mr-2 h-4 w-4" /> {`${text}`}
                </Suspense>
            </Button>
        </a>
    )
}