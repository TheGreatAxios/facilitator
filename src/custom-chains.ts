import { type Chain } from "viem"

export const skaleBaseSepoliaTestnetV1: Chain = {
    id: 2140350733,
    name: "SKALE Base Sepolia Testnet",
    rpcUrls: {
      default: {
        http: [
          "https://base-sepolia-testnet.skalenodes.com/v1/basic-defiant-hadar",
        ],
      },
    },
    blockExplorers: {
      default: {
        name: "Blockscout",
        url: "https://base-sepolia-testnet-explorer.skalenodes.com:10011",
      },
    },
    nativeCurrency: {
      name: "Credits",
      decimals: 18,
      symbol: "CRED",
    },
}