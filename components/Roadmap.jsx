import React, { useState } from 'react';
import './pages.css';
import './roadmap.css';

const PHASES = [
    {
        id: 'phase-1',
        phase: '01',
        title: 'FOUNDATION',
        period: 'Q1 2024',
        status: 'complete',
        summary: 'Core architecture, navigation, and wallet infrastructure.',
        milestones: [
            { label: 'Project scaffolding with Vite + React',           done: true  },
            { label: 'Sidebar navigation & React Router v6 setup',      done: true  },
            { label: 'MetaMask / EVM wallet connection',                done: true  },
            { label: 'Responsive mobile menu',                          done: true  },
            { label: 'Dark theme design system',                        done: true  },
        ],
    },
    {
        id: 'phase-2',
        phase: '02',
        title: 'CORE MODULES',
        period: 'Q2 2024',
        status: 'complete',
        summary: 'DeFi interfaces and NFT showcase built and live.',
        milestones: [
            { label: 'NFT Showcase with IPFS / Pinata integration',     done: true  },
            { label: 'Token bridge UI (Send — cross-network)',          done: true  },
            { label: 'Liquidity pool interface with live pricing',      done: true  },
            { label: 'Validator staking dashboard',                     done: true  },
            { label: 'CoinGecko live market data integration',         done: true  },
        ],
    },
    {
        id: 'phase-3',
        phase: '03',
        title: 'GOVERNANCE & IDENTITY',
        period: 'Q3 2024',
        status: 'active',
        summary: 'On-chain governance live. Universal Profile integration underway.',
        milestones: [
            { label: 'On-chain governance proposal viewer',             done: true  },
            { label: 'Voting UI with live vote tallies',               done: true  },
            { label: 'Community token distribution design',            done: true  },
            { label: 'Universal Profile (LSP-3) integration',         done: false },
            { label: 'LSP-7 / LSP-8 token & NFT standard support',   done: false },
        ],
    },
    {
        id: 'phase-4',
        phase: '04',
        title: 'MAINNET LAUNCH',
        period: 'Q4 2024',
        status: 'upcoming',
        summary: 'Real smart contracts deployed. NFT mint goes live on Lukso Mainnet.',
        milestones: [
            { label: 'Smart contract deployment (staking + governance)', done: false },
            { label: 'IMREXX NFT collection mint (Lukso Mainnet)',       done: false },
            { label: 'Real bridge contract integration',                 done: false },
            { label: 'Community token distribution — LYX airdrop',      done: false },
            { label: 'Security audit',                                   done: false },
        ],
    },
    {
        id: 'phase-5',
        phase: '05',
        title: 'ECOSYSTEM EXPANSION',
        period: 'Q1 2025',
        status: 'future',
        summary: 'DAO, multi-chain support, and developer tooling.',
        milestones: [
            { label: 'DAO formation & on-chain treasury',               done: false },
            { label: 'Multi-chain bridge (Ethereum, Polygon, BNB)',     done: false },
            { label: 'Public API / SDK for developers',                 done: false },
            { label: 'Mobile-optimised PWA release',                    done: false },
            { label: 'Analytics dashboard (TVL, volume, stakers)',      done: false },
        ],
    },
];

const STACK_FACTS = [
    { label: 'FRAMEWORK',    value: 'React 17 + Vite'         },
    { label: 'ROUTING',      value: 'React Router v6'         },
    { label: 'BLOCKCHAIN',   value: 'Ethers.js v6'            },
    { label: 'NETWORK',      value: 'Lukso Mainnet (EVM)'     },
    { label: 'NFT STORAGE',  value: 'IPFS via Pinata'         },
    { label: 'MARKET DATA',  value: 'CoinGecko API'           },
    { label: 'DEPLOYMENT',   value: 'GitHub Pages / Vercel'   },
    { label: 'STANDARDS',    value: 'LSP-3 · LSP-7 · LSP-8'  },
];

const STATUS_META = {
    complete: { label: 'COMPLETE',    color: 'var(--green)',  bar: 100 },
    active:   { label: 'IN PROGRESS', color: 'var(--aqua)',   bar: 60  },
    upcoming: { label: 'UPCOMING',    color: 'var(--yellow)', bar: 0   },
    future:   { label: 'PLANNED',     color: 'var(--muted)',  bar: 0   },
};

export default function Roadmap() {
    const [expanded, setExpanded] = useState('phase-3'); // active phase open by default

    const toggle = (id) => setExpanded(prev => prev === id ? null : id);

    const completeCount = PHASES.reduce((acc, p) => acc + p.milestones.filter(m => m.done).length, 0);
    const totalCount    = PHASES.reduce((acc, p) => acc + p.milestones.length, 0);
    const overallPct    = Math.round((completeCount / totalCount) * 100);

    return (
        <div className="page">
            <div className="page-header">
                <div className="page-header__left">
                    <div className="page-header__eyebrow">IMREXX HUB</div>
                    <h2 className="page-header__title">ROADMAP</h2>
                    <p className="page-header__desc">
                        Five phases from initial scaffold to a fully deployed DeFi hub on Lukso Mainnet.
                        {' '}{completeCount} of {totalCount} milestones complete.
                    </p>
                </div>

                {/* Overall progress */}
                <div className="rm-overall">
                    <div className="rm-overall__pct">{overallPct}%</div>
                    <div className="rm-overall__label">OVERALL PROGRESS</div>
                    <div className="rm-overall__bar">
                        <div className="rm-overall__fill" style={{ width: `${overallPct}%` }} />
                    </div>
                </div>
            </div>

            <div className="page-content rm-layout">

                {/* Left — timeline */}
                <div className="rm-timeline">
                    {PHASES.map((phase, idx) => {
                        const meta      = STATUS_META[phase.status];
                        const isOpen    = expanded === phase.id;
                        const doneCount = phase.milestones.filter(m => m.done).length;
                        const pct       = Math.round((doneCount / phase.milestones.length) * 100);
                        const isLast    = idx === PHASES.length - 1;

                        return (
                            <div key={phase.id} className={`rm-phase rm-phase--${phase.status}`}>

                                {/* Connector line */}
                                {!isLast && <div className="rm-phase__connector" />}

                                {/* Phase header — clickable */}
                                <button
                                    className="rm-phase__header"
                                    onClick={() => toggle(phase.id)}
                                    aria-expanded={isOpen}
                                >
                                    {/* Number node */}
                                    <div className="rm-phase__node" style={{ borderColor: meta.color, color: meta.color }}>
                                        {phase.status === 'complete' ? '✓' : phase.phase}
                                    </div>

                                    <div className="rm-phase__head-body">
                                        <div className="rm-phase__top-row">
                                            <span className="rm-phase__title">{phase.title}</span>
                                            <span className="rm-phase__period">{phase.period}</span>
                                        </div>
                                        <div className="rm-phase__meta-row">
                                            <span
                                                className="rm-phase__status-label"
                                                style={{ color: meta.color }}
                                            >
                                                {meta.label}
                                            </span>
                                            <span className="rm-phase__count">{doneCount}/{phase.milestones.length}</span>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="rm-phase__bar">
                                            <div
                                                className="rm-phase__bar-fill"
                                                style={{ width: `${pct}%`, background: meta.color }}
                                            />
                                        </div>
                                    </div>

                                    <span className="rm-phase__chevron" style={{ color: meta.color }}>
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {/* Expanded milestones */}
                                {isOpen && (
                                    <div className="rm-phase__body">
                                        <p className="rm-phase__summary">{phase.summary}</p>
                                        <ul className="rm-milestones">
                                            {phase.milestones.map((m, i) => (
                                                <li
                                                    key={i}
                                                    className={`rm-milestone ${m.done ? 'rm-milestone--done' : ''}`}
                                                >
                                                    <span
                                                        className="rm-milestone__icon"
                                                        style={{ color: m.done ? 'var(--green)' : 'rgba(255,255,255,0.2)' }}
                                                    >
                                                        {m.done ? '✓' : '○'}
                                                    </span>
                                                    <span className="rm-milestone__label">{m.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Right — sidebar panels */}
                <div className="rm-sidebar">

                    {/* Phase status legend */}
                    <div className="card-box rm-legend">
                        <div className="section-label" style={{ marginBottom: 16 }}>PHASE STATUS</div>
                        {Object.entries(STATUS_META).map(([key, val]) => (
                            <div className="rm-legend__item" key={key}>
                                <span className="rm-legend__dot" style={{ background: val.color }} />
                                <span className="rm-legend__label">{val.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech stack */}
                    <div className="card-box rm-stack">
                        <div className="section-label" style={{ marginBottom: 16 }}>TECH STACK</div>
                        {STACK_FACTS.map(f => (
                            <div className="rm-stack__row" key={f.label}>
                                <span className="rm-stack__key">{f.label}</span>
                                <span className="rm-stack__val">{f.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Why Lukso */}
                    <div className="card-box rm-why">
                        <div className="section-label" style={{ marginBottom: 14 }}>WHY LUKSO</div>
                        <p className="rm-why__text">
                            Lukso is an EVM-compatible L1 purpose-built for digital lifestyle and creative economies.
                            Its Universal Profile standard (LSP-3) replaces anonymous wallet addresses with
                            on-chain identities — making it uniquely suited for NFT collections, creator tooling,
                            and community governance.
                        </p>
                        <p className="rm-why__text" style={{ marginTop: 12 }}>
                            Building on Lukso means shipping real innovation in an emerging ecosystem
                            rather than adding to the noise on saturated chains.
                        </p>
                        <a
                            href="https://docs.lukso.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rm-why__link"
                        >
                            LUKSO DOCS ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
