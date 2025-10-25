import { skaleBaseSepoliaTestnetV1 } from "./custom-chains";
import { getPrivateKey } from "./getPrivateKey";

export const handlersByChain = [
    {
        id: "eip155:2140350733",
        info: skaleBaseSepoliaTestnetV1,
        tokens: [
            {
                "privateKey": getPrivateKey("eip155:2140350733"),
                "token": {
                    address: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                    contractName: "Axios USD",
                    forwarder: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                    forwarderName: "Axios USD",
                    forwarderVersion: "1"
                }
            }
        ]
    }
] as const;