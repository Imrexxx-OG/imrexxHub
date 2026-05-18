import React, { useState } from 'react';
import WalletConnection from './WalletConnection';
import './pages.css';
import './send-upgrade.css';

const NETWORKS = [
    { id: 'lukso',   name: 'Lukso Mainnet', icon: '◈' },
    { id: 'eth',     name: 'Ethereum',       icon: '⟠' },
    { id: 'bsc',     name: 'BNB Chain',      icon: '◉' },
    { id: 'polygon', name: 'Polygon',        icon: '⬡' },
];

const TOKENS = [
    { id: 'lyx',  symbol: 'LYX',  name: 'Lukso'   },
    { id: 'eth',  symbol: 'ETH',  name: 'Ethereum' },
    { id: 'usdc', symbol: 'USDC', name: 'USD Coin' },
    { id: 'usdt', symbol: 'USDT', name: 'Tether'   },
];

export default function Send() {
    const [amount,  setAmount]  = useState('');
    const [token,   setToken]   = useState('lyx');
    const [fromNet, setFromNet] = useState('lukso');
    const [toNet,   setToNet]   = useState('eth');
    const [status,  setStatus]  = useState(null);

    const handleSend = () => {
        if (!amount || parseFloat(amount) <= 0) return;
        setStatus('loading');
        setTimeout(() => setStatus('success'), 2000);
    };

    const reset = () => { setStatus(null); setAmount(''); };

    const selectedToken = TOKENS.find(t => t.id === token);
    const fromNetwork   = NETWORKS.find(n => n.id === fromNet);
    const toNetwork     = NETWORKS.find(n => n.id === toNet);

    return (
        <div className="page">
            <div className="wallet-strip">
                <WalletConnection />
            </div>

            <div className="page-header">
                <div className="page-header__left">
                    <div className="page-header__eyebrow">CROSS-CHAIN</div>
                    <h2 className="page-header__title">SEND</h2>
                    <p className="page-header__desc">
                        Bridge tokens between networks. Connect your wallet and confirm the transaction in MetaMask.
                    </p>
                </div>
            </div>

            <div className="page-content send-layout">

                <div className="send-form card-box">
                    {status === 'success' ? (
                        <div className="send-success">
                            <div className="send-success__icon">✓</div>
                            <h3 className="send-success__title">TRANSACTION SENT</h3>
                            <p className="send-success__sub">
                                {amount} {selectedToken?.symbol} from {fromNetwork?.name} → {toNetwork?.name}
                            </p>
                            <button className="btn btn--ghost btn--full" onClick={reset}>SEND ANOTHER</button>
                        </div>
                    ) : (
                        <>
                            <div className="field">
                                <label>AMOUNT</label>
                                <div className="send-amount-wrap">
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="0.00"
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)}
                                        className="send-amount-input"
                                    />
                                    <select
                                        value={token}
                                        onChange={e => setToken(e.target.value)}
                                        className="send-token-select"
                                    >
                                        {TOKENS.map(t => (
                                            <option key={t.id} value={t.id}>{t.symbol}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label>FROM NETWORK</label>
                                <select value={fromNet} onChange={e => setFromNet(e.target.value)}>
                                    {NETWORKS.map(n => (
                                        <option key={n.id} value={n.id}>{n.icon}  {n.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="send-arrow">↓</div>

                            <div className="field">
                                <label>TO NETWORK</label>
                                <select value={toNet} onChange={e => setToNet(e.target.value)}>
                                    {NETWORKS.filter(n => n.id !== fromNet).map(n => (
                                        <option key={n.id} value={n.id}>{n.icon}  {n.name}</option>
                                    ))}
                                </select>
                            </div>

                            {amount && parseFloat(amount) > 0 && (
                                <div className="send-summary">
                                    <div className="send-summary__row">
                                        <span>SENDING</span>
                                        <span>{amount} {selectedToken?.symbol}</span>
                                    </div>
                                    <div className="send-summary__row">
                                        <span>BRIDGE FEE</span>
                                        <span>~0.001 ETH</span>
                                    </div>
                                    <div className="send-summary__row send-summary__row--total">
                                        <span>ROUTE</span>
                                        <span>{fromNetwork?.name} → {toNetwork?.name}</span>
                                    </div>
                                </div>
                            )}

                            <p className="send-disclaimer">
                                ⚠ UI PROTOTYPE — Connect wallet to enable real transactions
                            </p>

                            <button
                                className={`btn btn--primary btn--full ${status === 'loading' ? 'btn--loading' : ''}`}
                                onClick={handleSend}
                                disabled={!amount || parseFloat(amount) <= 0 || status === 'loading'}
                            >
                                {status === 'loading' ? 'CONFIRMING...' : 'SEND →'}
                            </button>
                        </>
                    )}
                </div>

                <div className="send-info">
                    <div className="send-info__item">
                        <span className="send-info__label">SUPPORTED NETWORKS</span>
                        <div className="send-info__nets">
                            {NETWORKS.map(n => (
                                <div key={n.id} className="send-info__net">
                                    <span className="send-info__net-icon">{n.icon}</span>
                                    <span>{n.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="send-info__item">
                        <span className="send-info__label">REQUIREMENTS</span>
                        <ul className="send-info__list">
                            <li>MetaMask installed</li>
                            <li>Connected to source network</li>
                            <li>Sufficient balance + gas fees</li>
                        </ul>
                    </div>
                    <div className="send-info__item">
                        <span className="send-info__label">BRIDGE STATUS</span>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:6 }}>
                            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--yellow)', display:'inline-block' }} />
                            <span style={{ fontSize:'0.72rem', color:'var(--yellow)', fontWeight:700, letterSpacing:'0.1em' }}>
                                PROTOTYPE — MAINNET PHASE 4
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
