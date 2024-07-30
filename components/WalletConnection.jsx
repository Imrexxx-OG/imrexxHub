import React, { useState, useEffect } from 'react';

export default function WalletConnection() {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const storedIsConnected = localStorage.getItem('isConnected');
        const storedAccount = localStorage.getItem('account');

        if (storedIsConnected && storedAccount) {
            setAccount(storedAccount);
            setIsConnected(true);
        }
    }, []);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];

                setAccount(account);
                setIsConnected(true);

                localStorage.setItem('isConnected', true);
                localStorage.setItem('account', account);

                window.location.reload(); // refresh the page

            } catch (error) {
                console.error("Error connecting:", error);
                alert("Error connecting to wallet.");
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    const disconnect = () => {
        setAccount(null);
        setIsConnected(false);
        localStorage.removeItem('isConnected');
        localStorage.removeItem('account');
    };

    const walletConnectionStyle = {
        backgroundColor: '#000',
        padding: '20px',
        textAlign: 'center',
    };

    const connectButtonStyle = {
        backgroundColor: '#000',
        border: '2px solid whitesmoke',
        color: 'whitesmoke',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '14px',
        margin: '10px',
        cursor: 'pointer',
    };

    const mediaQuery = '@media (max-width: 768px)';
    const responsiveStyles = {
        ...connectButtonStyle,
        [mediaQuery]: {
            padding: '8px 16px',
            fontSize: '14px',
        },
    };

    return (
        <div style={walletConnectionStyle}>
            <button id="connect-button" style={responsiveStyles} onClick={isConnected ? disconnect : connectWallet}>
                {isConnected ? account.slice(0, 4) + '...' : 'CONNECT WALLET'}
            </button>
        </div>
    );
}
