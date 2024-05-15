import "dotenv/config";
import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
  const providerUrl = mainnet
    ? `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    : `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`;
  return new ethers.providers.JsonRpcProvider(providerUrl);
};

// const provider = getProvider(true);
// console.log("Provider", await provider.getNetwork());

const generateNewWallet = () => {
  console.log("=================================");
  const wallet = ethers.Wallet.createRandom();

  console.log("address:", wallet.address);
  console.log("private key:", wallet.privateKey);
  console.log("mnemonic:", wallet.mnemonic.phrase);
  console.log("=================================");
};

// generateNewWallet();

const getSigner = (mainnet = false) => {
  const provider = getProvider(mainnet);

  return new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
};

// const signer = getSigner();
// console.log("signer", await signer.getAddress());
// console.log(
//   "with balance",
//   ethers.utils.formatEther(await signer.getBalance()),
//   "ETH"
// );

export { getProvider, generateNewWallet, getSigner };
