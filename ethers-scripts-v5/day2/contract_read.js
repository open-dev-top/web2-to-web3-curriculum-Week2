import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import simpleNFTAbi from "./abi/simpleNFTAbi.js";

const simpleNFTAddress = "0x75708c16FccC1b8f02E439eC734B771FDE4d84a3";
const sepoliaProvider = getProvider();
const sepoliaSigner = getSigner();

const simpleNFTContract = new ethers.Contract(
  simpleNFTAddress,
  simpleNFTAbi,
  sepoliaProvider
);

const owner = await simpleNFTContract.owner();
console.log("owner of simple NFT Contrat:\n\t", owner);
