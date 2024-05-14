// require("dotenv").config();
// console.log(process.env);

import "dotenv/config";
import { BigNumber, ethers, utils } from "ethers";

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

console.log("Current block number", await provider.getBlockNumber());
// console.log("atg.eth is", await provider.resolveName("atg.eth"));
// console.log(
//   "This address is",
//   await provider.lookupAddress("0xF805636A05Bb396faF9Bb6954F4112d8c8F6B104")
// );
console.log(
  "This address has ",
  (
    await provider.getBalance("0xF805636A05Bb396faF9Bb6954F4112d8c8F6B104")
  ).toString(),
  "wei."
); // wei

const account_1_Balance = await provider.getBalance(
  "0xF805636A05Bb396faF9Bb6954F4112d8c8F6B104"
);
console.log(
  "Account_1's address has ",
  ethers.utils.formatEther(account_1_Balance),
  "ether."
); // ether

const myFound = ethers.utils.parseEther("10.1997");
console.log("My found is ", myFound); // ether
console.log("It is ", ethers.utils.formatEther(myFound), "ether."); // ether

var account_2_Balence = await provider.getBalance(
  "0x55f8A3030b7Ee60D2a2238c0b3C8CE7d81c3BE22"
);
account_2_Balence = account_2_Balence.add(ethers.utils.parseEther("5"));
console.log(
  "Account_2's address has ",
  ethers.utils.formatEther(account_2_Balence),
  "ether."
); // ether

if (account_1_Balance.gt(account_2_Balence)) {
  console.log("Account_1 has more ETH than Account_2");
} else {
  console.log("Account_2 has more ETH than Account_1");
}
