// require("dotenv").config();
// console.log(process.env);

import "dotenv/config";
import { ethers } from "ethers";

const alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;
const alchemyProvider = new ethers.providers.JsonRpcProvider(alchemyUrl);

console.log(
  "Current block number on Alchemy",
  await alchemyProvider.getBlockNumber()
);

const localNode = `http://localhost:8545`;
const localProvider = new ethers.providers.JsonRpcProvider(localNode);

console.log(
  "Current block number on Local Node",
  await localProvider.getBlockNumber()
);
