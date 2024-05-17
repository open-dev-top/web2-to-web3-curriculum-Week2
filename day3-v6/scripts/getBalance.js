// require("dotenv").config();
// console.log(process.env);
const hre = require("hardhat");
const { ethers, parseEther } = require("ethers");

// import "dotenv/config";
// import { ethers } from "ethers";

async function main() {
  const localProviderUrl = `http://127.0.0.1:8545/`;
  const provider = new ethers.getDefaultProvider(localProviderUrl);

  console.log("Current block number", await provider.getBlockNumber());

  const account0Address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const account0Balance = await provider.getBalance(account0Address);
  console.log("Account_0 has ", ethers.formatEther(account0Balance), "ETH."); // wei
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.emit(1);
  });
