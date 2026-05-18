import React, { useState, useEffect, useRef } from 'react';
import './wallet.css';

/**
 * WalletConnection
 * Props:
 *   variant: 'default' | 'hero' | 'strip'
 *     default → standard button, fits in header strips
 *     hero    → slightly larger, for the Home hero section
 *     strip   → compact, no padding around it
 */
export default function WalletConnection({ variant = 'default' }) {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount]         = useState(null);
    const [menuOpen, setMenuOpen]       = useState(false);
    const [network, setNetwork]         = useState(null);
    const menuRef = useRef(null);

    // Restore session
    useEffect(() => {
        const stored = localStorage.getItem('account');
        if (stored) {
            setAccount(stored);
            setIsConnected(true);
        }
    }, []);

    // Detect network
    useEffect(() => {
        if (!isConnected || !window.ethereum) return;
        window.ethereum.request({ method: 'eth_chainId' }).then(chainId => {
            setNetwork(CHAIN_NAMES[chainId] || `Chain ${parseInt(chainId, 16)}`);
        }).catch(() => {});

        const handleChainChange = (chainId) => {
            setNetwork(CHAIN_NAMES[chainId] || `Chain ${parseInt(chainId, 16)}`);
        };
        window.ethereum.on('chainChanged', handleChainChange);
        return () => window.ethereum.removeListener('chainChanged', handleChainChange);
    }, [isConnected]);

    // Close dropdown on outside click
    useEffect(() => {
        if (!menuOpen) return;
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [menuOpen]);

    const connect = async () => {
        if (!window.ethereum) {
            alert('MetaMask not detected. Please install MetaMask to connect.');
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const acc = accounts[0];
            setAccount(acc);
            setIsConnected(true);
            localStorage.setItem('account', acc);
        } catch (err) {
            console.error('Wallet connection error:', err);
        }
    };

    const disconnect = () => {
        setAccount(null);
        setIsConnected(false);
        setNetwork(null);
        setMenuOpen(false);
        localStorage.removeItem('account');
    };

    const copyAddress = () => {
        if (account) navigator.clipboard.writeText(account);
        setMenuOpen(false);
    };

    const truncate = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

    return (
        <div className={`wc wc--${variant}`} ref={menuRef}>
            {isConnected ? (
                <>
                    <button
                        className="wc-btn wc-btn--connected"
                        onClick={() => setMenuOpen(o => !o)}
                        aria-haspopup="true"
                        aria-expanded={menuOpen}
                    >
                        <span className="wc-btn__dot" />
                        <span className="wc-btn__addr">{truncate(account)}</span>
                        <span className="wc-btn__chevron">{menuOpen ? '▲' : '▼'}</span>
                    </button>

                    {menuOpen && (
                        <div className="wc-menu">
                            {network && (
                                <div className="wc-menu__network">
                                    <span className="wc-menu__net-dot" />
                                    {network}
                                </div>
                            )}
                            <div className="wc-menu__addr">{truncate(account)}</div>
                            <button className="wc-menu__item" onClick={copyAddress}>
                                COPY ADDRESS
                            </button>
                            <button className="wc-menu__item wc-menu__item--danger" onClick={disconnect}>
                                DISCONNECT
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <button className="wc-btn wc-btn--connect" onClick={connect}>
                    <span className="wc-btn__icon" aria-hidden="true">⬡</span>
                    CONNECT WALLET
                </button>
            )}
        </div>
    );
}

const CHAIN_NAMES = {
    '0x1':     'Ethereum Mainnet',
    '0x5':     'Goerli Testnet',
    '0x89':    'Polygon',
    '0x38':    'BNB Chain',
    '0xa4b1':  'Arbitrum One',
    '0xa':     'Optimism',
    '0x2a':    'Kovan',
    '0x1069':  'Lukso Mainnet',
    '0x10a9':  'Lukso Testnet',
};
