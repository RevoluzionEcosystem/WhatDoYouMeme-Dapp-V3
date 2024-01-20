"use client"

import { ChevronRightIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons"
import { usePathname, useRouter } from "next/navigation"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "../../ui/sheet"
import { Button } from "../../ui/button"
import { ScrollArea } from "../../ui/scroll-area"

import SidebarLogo from "./sidebar-logo"
import SidebarNav from "./sidebar-nav"

import general from "../../../data/lang/en/general.json"

export default function SidebarToggle() {
    let current = ""

    const router = useRouter()
    const pathname = usePathname()
    const crumbs = pathname.split("/").filter(crumb => crumb !== "").map(crumb => {
        current += `/${crumb}`
        return (
            <li key={crumb} className="text-sm font-semibold  truncate" aria-current="page">
                {crumb === "home" ? "" : (
                    <div className="flex m-0">
                        <ChevronRightIcon className="my-auto mx-2"/>
                        <span className="cursor-pointer" onClick={() => router.push(current)}>
                            {general["menu"].filter(item => item.id === crumb).map((item) => (item.name))}
                        </span>
                    </div>
                )}
            </li>
        )
    })

    return (
        <div className="sticky top-0 inset-x-0 z-20 bg-muted border-y px-4 sm:px-6 md:px-8 lg:hidden">
            <div className="flex items-center py-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="basic" className="border-primary hover:bg-primary hover:text-primary-foreground">
                            <TextAlignJustifyIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="block lg:hidden">
                        <ScrollArea className="h-full w-full rounded-md pr-2">
                            <SheetHeader className="text-left">
                                <SidebarLogo />
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <SheetClose>
                                        <SidebarNav />
                                </SheetClose>

                            </div>
                        </ScrollArea>
                    </SheetContent>
                </Sheet>

                <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label={general["terms"].breadcrumbs}>
                    <li className="flex items-center text-sm font-semibold cursor-pointer" onClick={() => router.push("/home")}>
                        {general.project_acronym}
                    </li>
                    {crumbs}
                </ol>
            </div>
        </div>
    )
}