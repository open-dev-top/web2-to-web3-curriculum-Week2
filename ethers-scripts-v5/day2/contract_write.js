import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import simpleNFTAbi from "./abi/simpleNFTAbi.js";

const simpleNFTAddress = "0x75708c16FccC1b8f02E439eC734B771FDE4d84a3";
const sepoliaProvider = getProvider();
const sepoliaSigner = getSigner();

// const simpleNFTContract = new ethers.Contract(
//   simpleNFTAddress,
//   simpleNFTAbi,
//   sepoliaProvider
// );

// const owner = await simpleNFTContract.owner();
// console.log("owner of simple NFT Contrat:\n\t", owner);

const simpleNFTContract = new ethers.Contract(
  simpleNFTAddress,
  simpleNFTAbi,
  sepoliaSigner
);

/* Once Run Result:
0x23dEf6F5935d0925925F07e76902608a45bA1Aed is Minting NFT!
TX sent... 0xfe2527ea852af3b4433a89ce003927548542b86a822832bace23adba4eb8e8d1
TX CONFIRMED!
*/
console.log(sepoliaSigner.address, "is Minting NFT!");
const mintTx = await simpleNFTContract.mintItem(
  sepoliaSigner.address,
  "QmfVMAmNM1kDEBYrC2TPzQDoCRFH6F5tE1e9Mr4FkkR5Xr"
);

console.log("TX sent...", mintTx.hash);
await mintTx.wait();
console.log("TX CONFIRMED!");
