import React, { useState, useEffect } from 'react';
import WalletConnection from './WalletConnection';
import './pages.css';
import './pool-upgrade.css';

// Fallback pools in case the API is unavailable
const FALLBACK_POOLS = [
    { id: 1, symbolA: 'LYX',  symbolB: 'ETH',  priceA: 2.45,   priceB: 3200.00, nameA: 'Lukso',    nameB: 'Ethereum', tvl: '1.2M',  apy: '8.4%'  },
    { id: 2, symbolA: 'LYX',  symbolB: 'USDC', priceA: 2.45,   priceB: 1.00,    nameA: 'Lukso',    nameB: 'USD Coin', tvl: '840K',  apy: '6.1%'  },
    { id: 3, symbolA: 'ETH',  symbolB: 'USDT', priceA: 3200.00, priceB: 1.00,   nameA: 'Ethereum', nameB: 'Tether',   tvl: '3.8M',  apy: '4.7%'  },
    { id: 4, symbolA: 'LYX',  symbolB: 'USDT', priceA: 2.45,   priceB: 1.00,    nameA: 'Lukso',    nameB: 'Tether',   tvl: '510K',  apy: '7.2%'  },
    { id: 5, symbolA: 'MATIC', symbolB: 'ETH', priceA: 0.88,   priceB: 3200.00, nameA: 'Polygon',  nameB: 'Ethereum', tvl: '2.1M',  apy: '5.9%'  },
    { id: 6, symbolA: 'BNB',  symbolB: 'USDC', priceA: 580.00, priceB: 1.00,    nameA: 'BNB',      nameB: 'USD Coin', tvl: '1.6M',  apy: '5.3%'  },
];

const ICONS = {
    LYX:  '◈', ETH: '⟠', USDC: '$', USDT: '$', MATIC: '⬡', BNB: '◉',
};

export default function Pool() {
    const [pools, setPools]           = useState(FALLBACK_POOLS);
    const [selected, setSelected]     = useState(null);
    const [amountA, setAmountA]       = useState('');
    const [amountB, setAmountB]       = useState('');
    const [loading, setLoading]       = useState(false);
    const [txStatus, setTxStatus]     = useState(null); // null | 'loading' | 'success'
    const [filter, setFilter]         = useState('ALL');

    // Attempt live data; silently fall back
    useEffect(() => {
        const fetchPools = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
                );
                if (!res.ok) throw new Error('API error');
                const data = await res.json();
                if (data.length >= 6) {
                    setPools([
                        { id: 1, symbolA: data[0].symbol.toUpperCase(), symbolB: data[1].symbol.toUpperCase(), priceA: data[0].current_price, priceB: data[1].current_price, nameA: data[0].name, nameB: data[1].name, tvl: '—', apy: '—' },
                        { id: 2, symbolA: data[2].symbol.toUpperCase(), symbolB: data[3].symbol.toUpperCase(), priceA: data[2].current_price, priceB: data[3].current_price, nameA: data[2].name, nameB: data[3].name, tvl: '—', apy: '—' },
                        { id: 3, symbolA: data[4].symbol.toUpperCase(), symbolB: data[5].symbol.toUpperCase(), priceA: data[4].current_price, priceB: data[5].current_price, nameA: data[4].name, nameB: data[5].name, tvl: '—', apy: '—' },
                        { id: 4, symbolA: data[0].symbol.toUpperCase(), symbolB: data[3].symbol.toUpperCase(), priceA: data[0].current_price, priceB: data[3].current_price, nameA: data[0].name, nameB: data[3].name, tvl: '—', apy: '—' },
                        { id: 5, symbolA: data[1].symbol.toUpperCase(), symbolB: data[5].symbol.toUpperCase(), priceA: data[1].current_price, priceB: data[5].current_price, nameA: data[1].name, nameB: data[5].name, tvl: '—', apy: '—' },
                        { id: 6, symbolA: data[2].symbol.toUpperCase(), symbolB: data[4].symbol.toUpperCase(), priceA: data[2].current_price, priceB: data[4].current_price, nameA: data[2].name, nameB: data[4].name, tvl: '—', apy: '—' },
                    ]);
                }
            } catch {
                // keep fallback data silently
            } finally {
                setLoading(false);
            }
        };
        fetchPools();
    }, []);

    const handleSelectPool = (pool) => {
        setSelected(pool);
        setAmountA('');
        setAmountB('');
        setTxStatus(null);
    };

    const handleAmountAChange = (val) => {
        setAmountA(val);
        if (selected && val) {
            setAmountB(((parseFloat(val) * selected.priceA) / selected.priceB).toFixed(6));
        } else {
            setAmountB('');
        }
    };

    const handleAmountBChange = (val) => {
        setAmountB(val);
        if (selected && val) {
            setAmountA(((parseFloat(val) * selected.priceB) / selected.priceA).toFixed(6));
        } else {
            setAmountA('');
        }
    };

    const handleProvide = () => {
        if (!amountA || !amountB) return;
        setTxStatus('loading');
        setTimeout(() => setTxStatus('success'), 2000);
    };

    const filteredPools = filter === 'ALL' ? pools : pools.filter(p => p.symbolA === filter || p.symbolB === filter);
    const uniqueSymbols = ['ALL', ...new Set(pools.flatMap(p => [p.symbolA, p.symbolB]))].slice(0, 7);

    const fmt = (n) => {
        if (!n || isNaN(n)) return '—';
        return n >= 1000 ? `$${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : `$${parseFloat(n).toFixed(4)}`;
    };

    return (
        <div className="page">
            <div className="wallet-strip"><WalletConnection /></div>

            <div className="page-header">
                <div className="page-header__left">
                    <div className="page-header__eyebrow">DeFi</div>
                    <h2 className="page-header__title">LIQUIDITY POOLS</h2>
                    <p className="page-header__desc">
                        Provide liquidity to token pairs and earn a share of trading fees.
                        Select a pool below to get started.
                    </p>
                </div>
            </div>

            <div className="page-content">
                {/* Token filter chips */}
                <div className="pool-filters">
                    {uniqueSymbols.map(s => (
                        <button
                            key={s}
                            className={`pool-filter-chip ${filter === s ? 'pool-filter-chip--active' : ''}`}
                            onClick={() => setFilter(s)}
                        >
                            {s !== 'ALL' && <span className="pool-chip-icon">{ICONS[s] || '◇'}</span>}
                            {s}
                        </button>
                    ))}
                </div>

                <div className={`pool-layout ${selected ? 'pool-layout--split' : ''}`}>
                    {/* Pool cards grid */}
                    <div>
                        <div className="section-head">
                            <span className="section-line" />
                            <span className="section-label">
                                {loading ? 'LOADING...' : `${filteredPools.length} POOLS`}
                            </span>
                            <span className="section-line" />
                        </div>

                        <div className="pool-grid">
                            {filteredPools.map(pool => (
                                <div
                                    key={pool.id}
                                    className={`pool-card ${selected?.id === pool.id ? 'pool-card--active' : ''}`}
                                    onClick={() => handleSelectPool(pool)}
                                >
                                    {/* Token pair icons */}
                                    <div className="pool-card__pair">
                                        <span className="pool-card__icon">{ICONS[pool.symbolA] || '◇'}</span>
                                        <span className="pool-card__icon pool-card__icon--b">{ICONS[pool.symbolB] || '◇'}</span>
                                        <span className="pool-card__pair-label">
                                            {pool.symbolA} / {pool.symbolB}
                                        </span>
                                    </div>

                                    {/* Stats row */}
                                    <div className="pool-card__stats">
                                        <div className="pool-card__stat">
                                            <span className="pool-card__stat-label">TVL</span>
                                            <span className="pool-card__stat-value">{pool.tvl !== '—' ? `$${pool.tvl}` : '—'}</span>
                                        </div>
                                        <div className="pool-card__stat">
                                            <span className="pool-card__stat-label">APY</span>
                                            <span className="pool-card__stat-value pool-card__stat-value--apy">{pool.apy}</span>
                                        </div>
                                    </div>

                                    {/* Price row */}
                                    <div className="pool-card__prices">
                                        <span>{pool.symbolA} {fmt(pool.priceA)}</span>
                                        <span className="pool-card__divider">·</span>
                                        <span>{pool.symbolB} {fmt(pool.priceB)}</span>
                                    </div>

                                    <span className="pool-card__cta">
                                        {selected?.id === pool.id ? 'SELECTED ✓' : 'ADD LIQUIDITY →'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Liquidity form panel */}
                    {selected && (
                        <div className="pool-form-wrap">
                            <div className="pool-form card-box">
                                {txStatus === 'success' ? (
                                    <div className="pool-success">
                                        <div className="pool-success__icon">✓</div>
                                        <h3 className="pool-success__title">LIQUIDITY ADDED</h3>
                                        <p className="pool-success__sub">
                                            {amountA} {selected.symbolA} + {amountB} {selected.symbolB} deposited into the pool
                                        </p>
                                        <button className="btn btn--ghost btn--full" onClick={() => { setTxStatus(null); setAmountA(''); setAmountB(''); }}>
                                            ADD MORE
                                        </button>
                                        <button className="btn btn--ghost btn--full" style={{ marginTop: 8 }} onClick={() => setSelected(null)}>
                                            BACK TO POOLS
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="pool-form__header">
                                            <div>
                                                <div className="pool-form__pair">
                                                    <span style={{ color: 'var(--aqua)' }}>{selected.symbolA}</span>
                                                    {' / '}
                                                    <span style={{ color: 'var(--aqua)' }}>{selected.symbolB}</span>
                                                </div>
                                                <div className="pool-form__subtitle">ADD LIQUIDITY</div>
                                            </div>
                                            <button className="pool-form__close" onClick={() => setSelected(null)}>✕</button>
                                        </div>

                                        <div className="field">
                                            <label>{selected.symbolA} AMOUNT</label>
                                            <div className="pool-input-wrap">
                                                <span className="pool-input-icon">{ICONS[selected.symbolA] || '◇'}</span>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    placeholder="0.000000"
                                                    value={amountA}
                                                    onChange={e => handleAmountAChange(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="pool-form__plus">+</div>

                                        <div className="field">
                                            <label>{selected.symbolB} AMOUNT</label>
                                            <div className="pool-input-wrap">
                                                <span className="pool-input-icon">{ICONS[selected.symbolB] || '◇'}</span>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    placeholder="0.000000"
                                                    value={amountB}
                                                    onChange={e => handleAmountBChange(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {amountA && amountB && (
                                            <div className="pool-form__summary">
                                                <div className="pool-form__summary-row">
                                                    <span>RATE</span>
                                                    <span>1 {selected.symbolA} = {(selected.priceA / selected.priceB).toFixed(6)} {selected.symbolB}</span>
                                                </div>
                                                <div className="pool-form__summary-row">
                                                    <span>SHARE OF POOL</span>
                                                    <span style={{ color: 'var(--aqua)' }}>&lt;0.01%</span>
                                                </div>
                                            </div>
                                        )}

                                        <button
                                            className={`btn btn--primary btn--full ${txStatus === 'loading' ? 'btn--loading' : ''}`}
                                            onClick={handleProvide}
                                            disabled={!amountA || !amountB || txStatus === 'loading'}
                                        >
                                            {txStatus === 'loading' ? 'CONFIRMING...' : 'PROVIDE LIQUIDITY →'}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
