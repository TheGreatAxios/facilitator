import { skaleBaseSepoliaTestnetV1 } from "./custom-chains";
import { getPrivateKey } from "./getPrivateKey";

export const handlersByChain = [
    {
        id: "eip155:324705682",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:324705682"),
                "token": {
                    address: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                    contractName: "Axios USD",
                    forwarder: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                    forwarderName: "Axios USD",
                    forwarderVersion: "1"
                }
            }
        ]
    },
    {
        id: "eip155:324705682",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:324705682"),
                "token": {
                    address: "0x2e08028E3C4c2356572E096d8EF835cD5C6030bD",
                    contractName: "Bridged USDC (SKALE Bridge)"
                }
            }
        ]
    },
    {
        id: "eip155:324705682",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:324705682"),
                "token": {
                    address: "0x3ca0a49f511c2c89c4dcbbf1731120d8919050bf",
                    contractName: "Tether USD",
                    forwarder: "0x3ca0a49f511c2c89c4dcbbf1731120d8919050bf",
                    forwarderName: "Tether USD",
                    forwarderVersion: "1"
                }
            }
        ]
    },
    {
        id: "eip155:324705682",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:324705682"),
                "token": {
                    address: "0x4512eacd4186b025186e1cf6cc0d89497c530e87",
                    contractName: "Wrapped BTC",
                    forwarder: "0x4512eacd4186b025186e1cf6cc0d89497c530e87",
                    forwarderName: "Wrapped BTC",
                    forwarderVersion: "1"
                }
            }
        ]
    },
    {
        id: "eip155:324705682",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:324705682"),
                "token": {
                    address: "0xf94056bd7f6965db3757e1b145f200b7346b4fc0",
                    contractName: "Wrapped Ether",
                    forwarder: "0xf94056bd7f6965db3757e1b145f200b7346b4fc0",
                    forwarderName: "Wrapped Ether",
                    forwarderVersion: "1"
                }
            }
        ]
    },
    {
        id: "eip155:324705682",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:324705682"),
                "token": {
                    address: "0xaf2e0ff5b5f51553fdb34ce7f04a6c3201cee57b",
                    contractName: "Skale Token",
                    forwarder: "0xaf2e0ff5b5f51553fdb34ce7f04a6c3201cee57b",
                    forwarderName: "Skale Token",
                    forwarderVersion: "1"
                }
            }
        ]
    },
] as const;