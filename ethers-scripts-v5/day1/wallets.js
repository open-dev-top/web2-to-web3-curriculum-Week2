import "dotenv/config";
import { BigNumber, ethers } from "ethers";

/*
address: 0x23dEf6F5935d0925925F07e76902608a45bA1Aed
private key: 0x6cf5c1c64a9cb9c103748089d3e08b48a0d7e95f34ba5a3e0a6401d7b22704b8
mnemonic: boat awake object chronic hungry lift glide hair predict blade august dutch
=================================
address: 0x23dEf6F5935d0925925F07e76902608a45bA1Aed
private key: 0x6cf5c1c64a9cb9c103748089d3e08b48a0d7e95f34ba5a3e0a6401d7b22704b8
address: 0xFd3759c71636EEB14C43ab0622EFd4E2E8192BBa
private key: 0xf88cffa44089c7b4f7ca05429361fdd31c05ffe69a2451b5838bb54461d6b982
address: 0x6e427959c7598817Ca0Ab1A0BBa202Cc3f24d6f6
private key: 0xbd122704330ceb460f94e65864c979d00ad46ee148b6a307f9e8ee6217d99a45
address: 0x771F06209D6b5b8061F085bF74F341f659cD1efB
private key: 0x330573a6f3de9538d58cfbca5b0331ceea908be2d080b72d55a6c9b166835d6f
address: 0x37C2DBC74732b4d94527dCE31e4b7598bE094931
private key: 0x73d82dad22193a8099ecb9a5e835af098cb3efe1059524ea91507bce0f1718b7
address: 0x78bC4bb7f98CEe0594145dbB70F6B3e30B004a44
private key: 0xf14c25cebd14c33e4f8cb2b9ba478ebaf63e821d319c5bf19773851982b21ad5
address: 0xD240aBa5ED8351327CF768a6B3D280516065E050
private key: 0x0d65318a532678de1603a9fc69a6a54dacfbc4d5a716730ca47cbb70c88ade5f
address: 0xaCc3DC538fA6bFA1D3b8594Ae47E6Dec6A70e831
private key: 0x241ade11e326ffe912106031ab4515288aa5e24b60424b2b85313776349f0b70
address: 0xF9cE73e8cC512879E3E109c16120b2c37c9408D7
private key: 0x688ce87a81d2b962ffddd8251199b94565993b57a902bc6e1fc2abf654f28cfb
address: 0xf37a2109Ed603D51abcd5D0DC9d4Eac20f3c9Ee1
private key: 0x5e44eed0d1719588b73cc23cee563a9c636703f4749aedcce2785e766313b62c
*/

// const wallet = ethers.Wallet.createRandom();

// console.log("address:", wallet.address);
// console.log("private key:", wallet.privateKey);
// console.log("mnemonic:", wallet.mnemonic.phrase);
// console.log("=================================");

// let path, myWallet;

// for (let i = 0; i < 10; i++) {
//   path = `m/44'/60'/0'/0/${i}`;
//   myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
//   console.log("address:", myWallet.address);
//   console.log("private key:", myWallet.privateKey);
// }

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
console.log("My wallet address (from private key)", signer.address);
// await signer.connect(provider);

const myBalance = await provider.getBalance(signer.address);

console.log("Sepolia balance", ethers.utils.formatEther(myBalance), "ETH");

// const wallet = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
// const signature = await wallet.signMessage("hello world");
// console.log("Signed message:", signature);
// const signerAddress = ethers.utils.verifyMessage("hello world", signature);
// console.log("Signer address:", signerAddress);

console.log("Sending ETH to", "address_2");
const tx = await signer.sendTransaction({
  to: "0xFd3759c71636EEB14C43ab0622EFd4E2E8192BBa",
  value: myBalance.div(BigNumber.from(10)),
});
console.log("TX is mining...", tx);
await tx.wait();
console.log("TX CONFIRMED!");
