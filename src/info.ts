import { Context } from "hono";

export default function infoController(c: Context) {
    return c.json({
        message: "Facilitator Service by https://dirtroad.dev",
        chains: [
            {
                id: "eip155:324705682",
                name: "SKALE Base Sepolia Testnet",
                rpcUrls: ["https://base-sepolia-testnet.skalenodes.com/v1/jubilant-horrible-ancha"],
                blockExplorer: "https://base-sepolia-testnet-explorer.skalenodes.com",
                nativeCurrency: {
                    name: "Credits",
                    symbol: "CREDITS",
                    decimals: 18
                },
                tokens: [
                    {
                        address: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                        contractName: "Axios USD",
                        forwarder: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                        forwarderName: "Axios USD",
                        forwarderVersion: "1"
                    }
                ]
            }
        ],
        endpoints: [
            {
                route: "/",
                description: "Facilitator payment routes",
                timeout: {
                    getRequirements: 5000
                }
            },
            {
                route: "/healthz",
                description: "Health check endpoint"
            }
        ]
    })
}
