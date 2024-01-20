import { Suspense } from "react"

import Governance from "../../components/modules/governance"
import Loader from "../../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Governance />
        </Suspense>
    )
}