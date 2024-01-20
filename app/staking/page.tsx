import { Suspense } from "react"

import Staking from "../../components/modules/staking"
import Loader from "../../components/modules/loader"

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Staking />
        </Suspense>
    )
}