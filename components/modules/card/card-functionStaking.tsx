"use client"

import { getStakingContribute, getStakingFunctions } from "../../../lib/helpers"
import { SelectSeparator } from "../../ui/select"

import CardFunctions from "../card/card-functions"

import staking from "../../../data/lang/en/staking.json"

const functions = staking["content"]["self"]["functions"]
const contribute = staking["content"]["self"]["contribute"]

export default function CardFunctionStaking() {
    return (
        <div>
            <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
                <h3 className="font-semibold">
                    {`${staking["content"]["self"].section_1}`}
                </h3>
                <SelectSeparator className="border border-border my-auto" />
            </div>
                        
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {functions.map((item, index) => (
                    <CardFunctions
                        key={`card-${index}`}
                        item={item}
                        children={
                            getStakingFunctions(item.data)
                        }
                    />
                ))}
            </div>

            <br />
                        
            <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
                <h3 className="font-semibold">
                    {`${staking["content"]["self"].section_2}`}
                </h3>
                <SelectSeparator className="border border-border my-auto" />
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {contribute.map((item, index) => (
                    <CardFunctions
                        key={`card-${index}`}
                        item={item}
                        children={
                            getStakingContribute(item.data)
                        }
                    />
                ))}
            </div>
        </div>
    )
}
