import { Hex, isHex } from "viem";

const evmPrivateKey = process.env.EVM_PRIVATE_KEY;

if (!evmPrivateKey) {
    throw new Error("EVM_PRIVATE_KEY is not set");
}

if (!isHex(evmPrivateKey)) {
    throw new Error("EVM_PRIVATE_KEY is not a valid hex string");
}

export const PRIVATE_KEY = evmPrivateKey as Hex;
export const isProduction = process.env.NODE_ENV === "production";