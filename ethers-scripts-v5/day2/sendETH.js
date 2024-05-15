import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const mainnetProvider = getProvider(true);
const sepoliaSigner = getSigner();

const account_1_balance = await sepoliaSigner.getBalance();
console.log("Account_1 Balance", ethers.utils.formatEther(account_1_balance));

const austingriffithAddress = await mainnetProvider.resolveName(
  "austingriffith.eth"
);
// console.log(austingriffithAddress);
const addressName = await mainnetProvider.lookupAddress(austingriffithAddress);
// console.log(addressName);

// process.exit();
console.log("===============================");
console.log("Sending 0.00000515 SepoliaETH to", addressName);

const tx = await sepoliaSigner.sendTransaction({
  to: austingriffithAddress,
  value: ethers.utils.parseEther("0.000005151"),
});
console.log("TX is mining...", tx.hash); //0xc7ab0bcccc8a7222a3445c1c91453c21fac745aa91c698e9fa35e978655eaa71
await tx.wait();
console.log("TX CONFIRMED!");
