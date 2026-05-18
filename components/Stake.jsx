import React, { useState } from 'react';
import WalletConnection from './WalletConnection';
import './pages.css';
import './stake-upgrade.css';

const VALIDATORS = [
    { name: 'Validator 1',  power: '12,000', share: '20%', commission: '5%',  uptime: '100%',   status: 'Active' },
    { name: 'Validator 2',  power: '15,000', share: '25%', commission: '4%',  uptime: '100%',   status: 'Active' },
    { name: 'Validator 3',  power: '8,500',  share: '15%', commission: '6%',  uptime: '99.7%',  status: 'Active' },
    { name: 'Validator 4',  power: '6,000',  share: '10%', commission: '7%',  uptime: '99.6%',  status: 'Inactive' },
    { name: 'Validator 5',  power: '9,000',  share: '12%', commission: '5%',  uptime: '99.5%',  status: 'Active' },
    { name: 'Validator 6',  power: '9,900',  share: '18%', commission: '3%',  uptime: '99.4%',  status: 'Active' },
    { name: 'Validator 7',  power: '1,500',  share: '25%', commission: '5%',  uptime: '100%',   status: 'Active' },
    { name: 'Validator 8',  power: '9,500',  share: '15%', commission: '6%',  uptime: '100%',   status: 'Active' },
    { name: 'Validator 9',  power: '6,000',  share: '10%', commission: '7%',  uptime: '99.6%',  status: 'Inactive' },
    { name: 'Validator 10', power: '9,000',  share: '10%', commission: '5%',  uptime: '99.5%',  status: 'Inactive' },
];

export default function Stake() {
    const [search, setSearch] = useState('');
    const [delegating, setDelegating] = useState(null);

    const filtered = VALIDATORS.filter(v =>
        v.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelegate = (name) => {
        setDelegating(name);
        setTimeout(() => setDelegating(null), 2000);
    };

    const uptimeColor = (u) => {
        const n = parseFloat(u);
        if (n === 100) return 'var(--green)';
        if (n >= 99.5) return 'var(--aqua)';
        return 'var(--yellow)';
    };

    return (
        <div className="page">
            <div className="wallet-strip">
                <WalletConnection />
            </div>

            <div className="page-header">
                <div className="page-header__left">
                    <div className="page-header__eyebrow">LUKSO MAINNET</div>
                    <h2 className="page-header__title">STAKE</h2>
                    <p className="page-header__desc">
                        Delegate your LYX tokens to validators to earn block rewards and help secure the network.
                        Choose based on commission, uptime, and voting power.
                    </p>
                </div>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="SEARCH VALIDATORS..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="page-content">
                <div className="section-head">
                    <span className="section-line" />
                    <span className="section-label">{filtered.length} VALIDATORS</span>
                    <span className="section-line" />
                </div>

                <div className="stake-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>VALIDATOR</th>
                                <th>VOTING POWER</th>
                                <th>SHARE</th>
                                <th>COMMISSION</th>
                                <th>UPTIME</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((v, i) => (
                                <tr key={v.name} className={v.status === 'Inactive' ? 'row--inactive' : ''}>
                                    <td className="td-num">{i + 1}</td>
                                    <td className="td-name">{v.name}</td>
                                    <td>{v.power} <span className="td-unit">LYX</span></td>
                                    <td>{v.share}</td>
                                    <td className="td-commission">{v.commission}</td>
                                    <td style={{ color: uptimeColor(v.uptime), fontWeight: 700 }}>{v.uptime}</td>
                                    <td>
                                        <span className={`badge ${v.status === 'Active' ? 'badge--active' : 'badge--inactive'}`}>
                                            {v.status === 'Active' ? '● ' : '○ '}{v.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className={`btn btn--primary stake-btn ${v.status === 'Inactive' ? 'btn--disabled' : ''}`}
                                            disabled={v.status === 'Inactive'}
                                            onClick={() => handleDelegate(v.name)}
                                        >
                                            {delegating === v.name ? '✓ SENT' : 'DELEGATE'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filtered.length === 0 && (
                        <div className="empty-state">
                            <p>NO VALIDATORS MATCH "{search}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
