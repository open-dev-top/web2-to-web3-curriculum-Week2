import { ethers } from "ethers";

const wallet = ethers.Wallet.createRandom();

console.log("address:", wallet.address);
console.log("private key:", wallet.privateKey);
console.log("mnemonic:", wallet.mnemonic.phrase);
