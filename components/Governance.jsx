import React, { useState } from 'react';
import WalletConnection from './WalletConnection';
import './pages.css';
import './governance-upgrade.css';

const PROPOSALS = [
    { id: 1,  title: 'Increase Block Size',          desc: 'Increase block size from 1MB to 2MB.',              type: 'Technical',  end: '2024-07-10', status: 'Active',   votes: { for: 62, against: 38 } },
    { id: 2,  title: 'Reduce Transaction Fees',      desc: 'Reduce transaction fees by 50%.',                  type: 'Economic',   end: '2024-07-15', status: 'Active',   votes: { for: 74, against: 26 } },
    { id: 3,  title: 'Introduce New Token',          desc: 'Introduce a new native ecosystem token.',          type: 'Economic',   end: '2024-07-20', status: 'Active',   votes: { for: 45, against: 55 } },
    { id: 4,  title: 'Implement Sharding',           desc: 'Implement sharding to improve scalability.',       type: 'Technical',  end: '2024-07-25', status: 'Closed',   votes: { for: 80, against: 20 } },
    { id: 5,  title: 'Upgrade Consensus Mechanism',  desc: 'Upgrade consensus mechanism to Proof of Stake.',   type: 'Technical',  end: '2024-07-30', status: 'Active',   votes: { for: 91, against: 9  } },
    { id: 6,  title: 'Increase Validator Rewards',   desc: 'Increase rewards for network validators.',         type: 'Economic',   end: '2024-08-05', status: 'Active',   votes: { for: 55, against: 45 } },
    { id: 7,  title: 'Add Governance Feature',       desc: 'Add on-chain snapshot voting for proposals.',      type: 'Governance', end: '2024-08-10', status: 'Active',   votes: { for: 68, against: 32 } },
    { id: 8,  title: 'Enhance Security Measures',   desc: 'Enhance network security with new audit tools.',   type: 'Technical',  end: '2024-08-15', status: 'Closed',   votes: { for: 77, against: 23 } },
    { id: 9,  title: 'Decrease Token Supply',        desc: 'Decrease total supply of LYX by 5%.',             type: 'Economic',   end: '2024-08-20', status: 'Active',   votes: { for: 40, against: 60 } },
    { id: 10, title: 'Expand Ecosystem',             desc: 'Expand ecosystem with 3 new protocol partners.',   type: 'Governance', end: '2024-08-25', status: 'Active',   votes: { for: 83, against: 17 } },
];

const TYPE_FILTERS = ['All', 'Technical', 'Economic', 'Governance'];
const TYPE_COLORS  = { Technical: 'badge--live', Economic: 'badge--soon', Governance: 'badge--active' };

export default function Governance() {
    const [filter, setFilter]   = useState('All');
    const [voted, setVoted]     = useState({});

    const filtered = PROPOSALS.filter(p => filter === 'All' || p.type === filter);

    const vote = (id, side) => {
        setVoted(prev => ({ ...prev, [id]: side }));
    };

    return (
        <div className="page">
            <div className="wallet-strip"><WalletConnection /></div>

            <div className="page-header">
                <div className="page-header__left">
                    <div className="page-header__eyebrow">ON-CHAIN</div>
                    <h2 className="page-header__title">GOVERNANCE</h2>
                    <p className="page-header__desc">
                        Review active proposals and cast your vote. Your LYX balance determines your voting weight.
                    </p>
                </div>
                <div className="gov-filters">
                    {TYPE_FILTERS.map(f => (
                        <button
                            key={f}
                            className={`gov-filter ${filter === f ? 'gov-filter--active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="page-content">
                <div className="section-head">
                    <span className="section-line" />
                    <span className="section-label">{filtered.length} PROPOSALS</span>
                    <span className="section-line" />
                </div>

                <div className="gov-list">
                    {filtered.map(p => (
                        <div className="gov-card" key={p.id}>
                            <div className="gov-card__head">
                                <div className="gov-card__meta">
                                    <span className={`badge ${TYPE_COLORS[p.type]}`}>{p.type.toUpperCase()}</span>
                                    <span className={`badge ${p.status === 'Active' ? 'badge--active' : 'badge--inactive'}`}>
                                        {p.status === 'Active' ? '●' : '○'} {p.status.toUpperCase()}
                                    </span>
                                    <span className="gov-card__id">#{p.id}</span>
                                </div>
                                <span className="gov-card__date">ENDS {p.end}</span>
                            </div>

                            <h3 className="gov-card__title">{p.title}</h3>
                            <p className="gov-card__desc">{p.desc}</p>

                            {/* Vote bar */}
                            <div className="gov-bar">
                                <div
                                    className="gov-bar__fill gov-bar__fill--for"
                                    style={{ width: `${p.votes.for}%` }}
                                />
                            </div>
                            <div className="gov-bar__labels">
                                <span style={{ color: 'var(--green)' }}>FOR {p.votes.for}%</span>
                                <span style={{ color: 'var(--red)' }}>AGAINST {p.votes.against}%</span>
                            </div>

                            {/* Vote buttons */}
                            {p.status === 'Active' && (
                                <div className="gov-card__actions">
                                    {voted[p.id] ? (
                                        <span className="gov-voted">
                                            ✓ VOTED {voted[p.id].toUpperCase()}
                                        </span>
                                    ) : (
                                        <>
                                            <button className="btn btn--for" onClick={() => vote(p.id, 'for')}>
                                                ↑ VOTE FOR
                                            </button>
                                            <button className="btn btn--against" onClick={() => vote(p.id, 'against')}>
                                                ↓ VOTE AGAINST
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
