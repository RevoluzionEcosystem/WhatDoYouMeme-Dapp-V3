"use client"

import { DashboardIcon, HomeIcon, IdCardIcon, LockClosedIcon, MixIcon, ReaderIcon, SizeIcon } from "@radix-ui/react-icons"
import { FaXTwitter, FaTelegram, FaYoutube } from "react-icons/fa6"
import { useEffect, useState } from "react"

import CardStake from "../components/modules/card/card-stake"
import CardUnstake from "../components/modules/card/card-unstake"
import CardEmergency from "../components/modules/card/card-emergency"
import CardAllowance from "../components/modules/card/card-allowance"
import CardClaimRewards from "../components/modules/card/card-claimRewards"
import CardAllRewards from "../components/modules/card/card-claimAllRewards"
import CardDepositBNB from "../components/modules/card/card-depositBNB"
import CardDepositBUSD from "../components/modules/card/card-depositBUSD"
import CardDepositStuckedBNB from "../components/modules/card/card-depositStuckedBNB"
import CardDepositStuckedBUSD from "../components/modules/card/card-depositStuckedBUSD"

var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"]
var VALUE = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion"]

export const nFormatter = (number: number, decimals: number, fixed?: number) => {
    var tier = Math.log10(Math.abs(number)) / 3 | 0

    if (tier <= -1) {
        const exponent = Math.abs(tier) * 3
        const coefficient = (number * Math.pow(10, exponent + decimals)).toFixed(0)
        return (
            <div>
                0.0
                <sub>
                    <sub className="text-xs p-0.5 text-foreground group-hover:text-primary">{`${exponent}`}</sub>
                </sub>
                {`${coefficient}`}
            </div>
        )
    }

    if(tier <= 0) return Number(number).toFixed(decimals)
    
    var suffix = SI_SYMBOL[tier]
    var scale = Math.pow(10, tier * 3)

    var scaled = number / scale

    if(fixed > 0) return scaled.toFixed(fixed) + " " + suffix

    return scaled.toFixed(3) + " " + suffix
}

export const nAmount = (number: number, decimals: number, fixed?: number) => {
    var tier = Math.log10(Math.abs(number)) / 3 | 0

    if (tier <= -1) {
        const exponent = Math.abs(tier) * 3
        const coefficient = (number * Math.pow(10, exponent + decimals)).toFixed(0)
        return (
            <div>
                0.0
                <sub>
                    <sub className="text-xs p-0.5 text-foreground group-hover:text-primary">{`${exponent}`}</sub>
                </sub>
                {`${coefficient}`}
            </div>
        )
    }

    if(tier <= 0) return Number(number).toFixed(decimals)
    
    var suffix = VALUE[tier]
    var scale = Math.pow(10, tier * 3)

    var scaled = number / scale

    if(fixed > 0) return scaled.toFixed(fixed) + " " + suffix

    return scaled.toFixed(3) + " " + suffix
}

export function getCssValue(name: string) {
    const [val, setVal] = useState("")

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const value = rootStyles.getPropertyValue(name)
        setVal(value)
    }, [])

    return val
}

export function getNavIcon(id: string) {
    if (id === "home") {
        return <HomeIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "dashboard") {
        return <DashboardIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "raffle") {
        return <MixIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "governance") {
        return <IdCardIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "staking") {
        return <LockClosedIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "swap") {
        return <SizeIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "documentation") {
        return <ReaderIcon className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "telegram") {
        return <FaTelegram className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "twitter") {
        return <FaXTwitter className="mr-1 h-[1rem] w-[1rem] " />
    }
    if (id === "youtube") {
        return <FaYoutube className="mr-1 h-[1rem] w-[1rem] " />
    }
}

export function getStakingFunctions(id: number) {
    if (id === 0) {
        return <CardStake />
    }
    if (id === 1) {
        return <CardUnstake />
    }
    if (id === 2) {
        return <CardEmergency />
    }
    if (id === 3) {
        return <CardAllowance />
    }
    if (id === 4) {
        return <CardClaimRewards />
    }
    if (id === 5) {
        return <CardAllRewards />
    }
}

export function getStakingContribute(id: number) {
    if (id === 0) {
        return <CardDepositBNB />
    }
    if (id === 1) {
        return <CardDepositBUSD />
    }
    if (id === 2) {
        return <CardDepositStuckedBNB />
    }
    if (id === 3) {
        return <CardDepositStuckedBUSD />
    }
}

export function parseFullTokenSymbol(fullTokenSymbol) {
    const match = fullTokenSymbol.match(/^(\w+)_(\w+)$/)
    if (!match) {
        return null
    }
    return { network: match[1], pairAddress: match[2] }
}

export const truncateAddress = (address: string, first: number, last: number, filler?: string) => {
    return address.substring(0, first) + (filler ? filler : "...")  + address.substring(address.length - last)
}

export function capitalizeStr(word, length) {
    return word.charAt(length - 1).toUpperCase() + word.slice(length)
}
