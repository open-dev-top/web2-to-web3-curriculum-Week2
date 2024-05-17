require("dotenv").config();
const hre = require("hardhat");
// const { ethers } = require("ethers");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const myBalance = await deployer.provider.getBalance(deployer.address);
  console.log("My balance", myBalance);

  const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  console.log("Sending ETH to", toAddress);

  const tx = await deployer.sendTransaction({
    to: toAddress,
    value: myBalance / 10n,
  });

  console.log("TX SENT!", tx.hash);
  await tx.wait();
  console.log("TX MINED!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.emit(1);
  });
