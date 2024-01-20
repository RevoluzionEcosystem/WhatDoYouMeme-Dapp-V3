import { Suspense } from "react"

import Raffle from "../../components/modules/raffle"
import Loader from "../../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Raffle />
        </Suspense>
    )
}