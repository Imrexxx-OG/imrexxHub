// src/ethers.js
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.meter.io'); // Mainnet RPC URL

const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
};

export { provider, getSigner };
