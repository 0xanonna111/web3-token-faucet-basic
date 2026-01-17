import { connectWallet } from "./web3.js";
import { requestTokens } from "./faucet.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Status: Wallet connected";
};

document.getElementById("requestBtn").onclick = async () => {
  const hash = await requestTokens();
  document.getElementById("status").innerText = "Tx Hash: " + hash;
};
