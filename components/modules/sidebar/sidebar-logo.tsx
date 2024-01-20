"use client"

import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "../../ui/skeleton"

import general from "../../../data/lang/en/general.json"

export default function SidebarLogo() {
    const router = useRouter()

    return (
        <div className="flex-none text-xl font-semibold" onClick={() => router.push("/home")}>
            <Suspense fallback={
                <Skeleton className="h-9 w-full max-w-[180px]"/>
            }>
                {general.project_title}
            </Suspense>
        </div>
    )
}