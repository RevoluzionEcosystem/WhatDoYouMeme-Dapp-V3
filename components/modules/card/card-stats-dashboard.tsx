import { TooltipContent } from "@radix-ui/react-tooltip";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Button } from "../../ui/button";

export default async function CardStats({title, tooltip, value}) {
    return (
        <div className="flex flex-col border border-border hover:border-primary rounded-xl">
            <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                    <p className="text-sm font-semibold text-muted-foreground">
                        {`${title}`}
                    </p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild className="ml-auto mb-auto">
                                <Button variant="tooltip" size="tooltip">
                                    <FaRegCircleQuestion />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="bg-background px-6 py-3 mb-3 rounded-md text-sm border">
                                    {`${tooltip}`}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl text-foreground">
                    {`${value}`}
                </h3>
            </div>
        </div>
    )
}