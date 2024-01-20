"use client"

import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { DataTableColumnHeader } from "./data-table-column-header"
import { capitalizeStr, nFormatter, truncateAddress } from "../../../../lib/helpers"

import general from "../../../../data/lang/en/general.json"

const terms = general["terms"]

export const columns = [
    {
        accessorKey: "attributes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={terms.time} />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("attributes").block_timestamp).toString()
            const crumbs = date.split(" ")
            return (
                <div className="min-w-[80px]">
                    <div className="flex">
                        {`${crumbs[1]} ${crumbs[2]}, ${crumbs[3]} (${crumbs[0]}) - ${crumbs[4]}`}
                    </div>
                </div>
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "attributes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={terms.type} />
        ),
        cell: ({ row }) => (
            <div className={`flex font-semibold ${row.getValue("attributes").kind === "buy" ? "text-success" : row.getValue("attributes").kind === "sell" ? "text-warning" : ""}`}>
                {capitalizeStr(row.getValue("attributes").kind, 1)}
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "attributes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={terms.price} />
        ),
        cell: ({ row }) => (
            <div className={`font-semibold`}>
                <div>
                    <span className="mr-1 text-muted-foreground">Token:</span><span className="mr-1">$</span>{row.getValue("attributes").kind === "sell" ? nFormatter(row.getValue("attributes").price_from_in_usd, 5) : nFormatter(row.getValue("attributes").price_to_in_usd, 5)}
                </div>
                <div>
                    <span className="mr-1 text-muted-foreground">Total:</span><span className="mr-1">$</span>{nFormatter(row.getValue("attributes").volume_in_usd, 5)}
                </div>
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "attributes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={terms.amount} />
        ),
        cell: ({ row }) => (
            <div className={`font-semibold`}>
                <div>
                    <span className="mr-1 text-muted-foreground">Base:</span>{row.getValue("attributes").kind === "sell" ? nFormatter(row.getValue("attributes").from_token_amount, 5) : nFormatter(row.getValue("attributes").to_token_amount, 5)}
                </div>
                <div>
                    <span className="mr-1 text-muted-foreground">Quote:</span>{row.getValue("attributes").kind === "sell" ? nFormatter(row.getValue("attributes").to_token_amount, 5) : nFormatter(row.getValue("attributes").from_token_amount, 5)}
                </div>
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "attributes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={terms.address} />
        ),
        cell: ({ row }) => (
            <a href={`${general["explorer"].eth}/address/${row.getValue("attributes").tx_from_address}`} target="_blank">
                <div className={`flex font-semibold`}>
                    <span className="mr-1">{truncateAddress(row.getValue("attributes").tx_from_address, 6, 6)}</span><ExternalLinkIcon className="w-4x h-4" />
                </div>
            </a>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "attributes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={terms.txn} />
        ),
        cell: ({ row }) => (
            <a href={`${general["explorer"].eth}/tx/${row.getValue("attributes").tx_hash}`} target="_blank">
                <div className={`flex font-semibold`}>
                    <ExternalLinkIcon className="w-4x h-4" />
                </div>
            </a>
        ),
        enableSorting: false,
        enableHiding: false,
    },
]