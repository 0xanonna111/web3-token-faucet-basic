import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const faucetAddress = "0xYourFaucetContract";
const abi = [];

export async function requestTokens() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(faucetAddress, abi, signer);

  const tx = await contract.request();
  const receipt = await tx.wait();

  return receipt.transactionHash;
}
