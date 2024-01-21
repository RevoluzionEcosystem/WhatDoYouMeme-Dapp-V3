"use client"

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { Chain, bsc } from 'wagmi/chains'

import info from "../data/lang/en/general.json"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const siteUrl = process.env.SITE_URL

const chains = [ bsc ]
const metadata = {
    name: info.project_title,
    description: info.project_description,
    url: siteUrl,
    icons: [
        siteUrl + "assets/images/wdym.webp"
    ]
}

const wagmiConfig = defaultWagmiConfig({ chains: [bsc], projectId, metadata: { ...metadata, verifyUrl: '' } })

export default function Web3Wrapper({
    children, mode
}) {
    createWeb3Modal({
        wagmiConfig,
        projectId,
        chains: Object.values(chains) as unknown as [Chain, ...Chain[]],
        themeMode: mode,
        themeVariables: {
            "--w3m-accent": "#09D1D8FF",
            "--w3m-color-mix": "#28EFF6FF",
            "--w3m-color-mix-strength": 15,
            "--w3m-border-radius-master": "1px"
        }
    })
    
    return (
        <div>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>
        </div>
    )
}
