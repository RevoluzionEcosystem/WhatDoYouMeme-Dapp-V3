import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"

import general from "../../../data/lang/en/general.json"

const terms = general["terms"]

export default function SearchBar({extraDivClass}) {
    return (
        <div
            className={extraDivClass}
        >
            <Label
                htmlFor="icon"
                className="sr-only"
            >
                {`${terms.search}`}
            </Label>
            <div className="relative">
                <div
                    className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4"
                >
                    <MagnifyingGlassIcon
                        className="h-4 w-4"
                    />
                </div>
                <Input
                    type="text"
                    id="icon"
                    name="icon"
                    placeholder={`${terms.search}`}
                    className="py-2 px-4 pl-11 block w-full shadow-sm rounded-md text-sm focus:z-10"
                />
            </div>
        </div>
    )
}