import { FaRegCircleQuestion } from "react-icons/fa6";
import { ReactNode } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Button } from "../../ui/button";
import { TooltipContent } from "@radix-ui/react-tooltip";

export default function CardFunctions({item, children}: {
    item: any
    children: ReactNode
}) {
    return (
        <div key={`item-${item.data}`} className="flex flex-col border border-border hover:border-primary rounded-xl">
            <div key={`card-${item.data}`} className="p-4 md:p-5">
                <div key={`type-${item.data}`} className="flex items-center gap-x-2">
                    <p key={`title-${item.data}`} className="text-md font-semibold text-primary mb-3">
                        {`${item.title}`}
                    </p>
                    <TooltipProvider key={`ttprov-${item.data}`}>
                        <Tooltip key={`tooltip-${item.data}`}>
                            <TooltipTrigger asChild className="ml-auto mb-auto" key={`trigger-${item.data}`}>
                                <Button variant="tooltip" size="tooltip" key={`button-${item.data}`}>
                                    <FaRegCircleQuestion key={`icon-${item.data}`}/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent key={`content-${item.data}`}>
                                <p className="bg-background px-6 py-3 mb-3 rounded-md text-sm border" key={`text-${item.data}`}>
                                    {`${item.tooltip}`}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                {children}
            </div>
        </div>
    )
}
