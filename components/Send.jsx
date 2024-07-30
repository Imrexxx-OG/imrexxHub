import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import WalletConnection from './WalletConnection';
import './navigation.css';

export default function Send() {
    const [tokens, setTokens] = useState([]);
    const [networks, setNetworks] = useState([]);
    const [selectedToken, setSelectedToken] = useState('');
    const [selectedFromNetwork, setSelectedFromNetwork] = useState('');
    const [selectedToNetwork, setSelectedToNetwork] = useState('');
    const [amount, setAmount] = useState('');
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 100,
                        page: 1,
                        sparkline: false,
                    },
                });
                setTokens(response.data);
            } catch (error) {
                console.error("Error fetching tokens:", error);
            }
        };

        const fetchNetworks = async () => {
            const exampleNetworks = [
                { id: 'meter', name: 'Meter Network' },
                { id: 'eth', name: 'Ethereum Network' },
                { id: 'bsc', name: 'Binance Smart Chain' },
                { id: 'polygon', name: 'Polygon Network' },
            ];
            setNetworks(exampleNetworks);
        };

        fetchTokens();
        fetchNetworks();

        const storedAccount = localStorage.getItem('account');
        if (storedAccount) {
            setAccount(storedAccount);
        }
    }, []);

    const handleTokenChange = (e) => {
        setSelectedToken(e.target.value);
    };

    const handleNetworkChange = (e, setNetwork) => {
        setNetwork(e.target.value);
    };

    const handleSend = async () => {
        try {
            if (!account) {
                alert('Please connect your wallet first.');
                return;
            }

            if (selectedFromNetwork === 'meter') {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();

                // Assuming you have a bridge contract on the Meter network
                const bridgeContractAddress = 'YOUR_BRIDGE_CONTRACT_ADDRESS';
                const bridgeABI = [
                    // Add your bridge contract ABI here
                ];
                const bridgeContract = new ethers.Contract(bridgeContractAddress, bridgeABI, signer);

                const tx = await bridgeContract.transferToOtherNetwork(
                    selectedToNetwork, // Target network (e.g., 'eth', 'bsc', 'polygon')
                    ethers.utils.parseUnits(amount, 18), // Amount to transfer
                    account // Receiver address
                );

                await tx.wait();
                alert(`Transaction successful: ${tx.hash}`);
            } else {
                alert('Currently only transfers from Meter to other networks are supported.');
            }
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed');
        }
    };

    return (
        <div className='myContainer'>
            <div className="send-container">
                <WalletConnection />
                <h2 className="send-title">Send Token</h2>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="amount-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="token">Token:</label>
                    <select id="token" value={selectedToken} onChange={handleTokenChange} className="token-select">
                        <option value="" disabled>Select Token</option>
                        {tokens.map(token => (
                            <option key={token.id} value={token.id}>
                                <img src={token.image} alt={token.name} className="token-image" /> {token.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="from-network">From:</label>
                    <select id="from-network" value={selectedFromNetwork} onChange={(e) => handleNetworkChange(e, setSelectedFromNetwork)} className="network-select">
                        <option value="" disabled>Select Network</option>
                        {networks.map(network => (
                            <option key={network.id} value={network.id}>{network.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="to-network">To:</label>
                    <select id="to-network" value={selectedToNetwork} onChange={(e) => handleNetworkChange(e, setSelectedToNetwork)} className="network-select">
                        <option value="" disabled>Select Network</option>
                        {networks.map(network => (
                            <option key={network.id} value={network.id}>{network.name}</option>
                        ))}
                    </select>
                </div>
                <button className="send-button" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}
