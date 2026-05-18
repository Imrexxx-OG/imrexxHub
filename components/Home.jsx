import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WalletConnection from './WalletConnection';
import './navigation.css';
import './home-upgrade.css';

const FEATURES = [
    { icon: '◈', label: 'SHOWCASE',   path: '/showcase',   desc: 'Preview our exclusive NFT collection before the Lukso Mainnet launch.',          tag: 'LIVE',   tagType: 'live'    },
    { icon: '⇄', label: 'SEND',       path: '/send',       desc: 'Bridge tokens across networks with low fees and full on-chain transparency.',     tag: 'BRIDGE', tagType: 'neutral' },
    { icon: '◎', label: 'STAKE',      path: '/stake',      desc: 'Delegate LYX tokens to validators and earn passive block rewards.',               tag: 'EARN',   tagType: 'earn'    },
    { icon: '⬡', label: 'POOL',       path: '/pool',       desc: 'Provide liquidity to token pairs and collect a share of trading fees.',           tag: 'DeFi',   tagType: 'neutral' },
    { icon: '⊞', label: 'GOVERNANCE', path: '/governance', desc: 'Vote on proposals and shape the future direction of the network.',                tag: 'VOTE',   tagType: 'neutral' },
    { icon: '⬛', label: 'ROADMAP',    path: '/roadmap',    desc: 'Five-phase development plan from foundation to full Lukso Mainnet deployment.',     tag: 'NEW',    tagType: 'live'    },
];

const STATS = [
    { label: 'NETWORK',    value: 'LUKSO MAINNET' },
    { label: 'VALIDATORS', value: '120+' },
    { label: 'EST. APY',   value: '~7.2%' },
    { label: 'TOKEN',      value: 'LYX' },
    { label: 'STATUS',     value: '● ONLINE', live: true },
];

const STACK = ['React 17', 'React Router v6', 'Ethers.js v6', 'Vite', 'CoinGecko API', 'Lukso Mainnet', 'IPFS · Pinata'];

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

    return (
        <div className={`home-wrapper home-v2 ${loaded ? 'home-v2--loaded' : ''}`}>
            <div className="hv2-scanlines" aria-hidden="true" />

            <section className="hv2-hero">
                <div className="hv2-hero__grid" aria-hidden="true" />
                <div className="hv2-hero__inner">
                    <div className="hv2-hero__badge">
                        <span className="hv2-dot" />
                        LUKSO MAINNET
                    </div>
                    <h1 className="hv2-hero__title">IMREXX HUB</h1>
                    <p className="hv2-hero__sub">
                        A decentralized frontend for the Lukso ecosystem —<br />
                        staking, governance, liquidity, NFTs and more.
                    </p>
                    <div className="hv2-hero__actions">
                        <WalletConnection variant="hero" />
                        <Link to="/showcase" className="hv2-cta-ghost">EXPLORE NFTs →</Link>
                        <a href="https://github.com/yourusername/imrexx-hub" target="_blank" rel="noopener noreferrer" className="hv2-cta-ghost">
                            ⌥ GITHUB
                        </a>
                    </div>
                    <p className="hv2-hero__disclaimer">
                        ⚠ LIVE DEMO — Bridge and liquidity functions are UI prototypes. Connect wallet to interact with real staking and governance.
                    </p>
                </div>
            </section>

            <div className="hv2-stats">
                {STATS.map((s) => (
                    <div className="hv2-stat" key={s.label}>
                        <span className="hv2-stat__label">{s.label}</span>
                        <span className={`hv2-stat__value${s.live ? ' hv2-stat__value--live' : ''}`}>{s.value}</span>
                    </div>
                ))}
            </div>

            <section className="hv2-features">
                <div className="hv2-section-head">
                    <span className="hv2-section-line" />
                    <span className="hv2-section-label">HUB MODULES</span>
                    <span className="hv2-section-line" />
                </div>
                <div className="hv2-grid">
                    {FEATURES.map((f) => (
                        <Link to={f.path} className="hv2-card" key={f.label}>
                            <div className="hv2-card__top">
                                <span className="hv2-card__icon" aria-hidden="true">{f.icon}</span>
                                <span className={`hv2-card__tag hv2-card__tag--${f.tagType}`}>{f.tag}</span>
                            </div>
                            <h3 className="hv2-card__label">{f.label}</h3>
                            <p className="hv2-card__desc">{f.desc}</p>
                            <span className="hv2-card__arrow">→</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="hv2-about">
                <div className="hv2-about__inner">
                    <div className="hv2-about__accent">/ /</div>
                    <p className="hv2-about__text">
                        <strong>IMREXX HUB</strong> is a decentralized frontend interface built for the Lukso ecosystem.
                        No custody and middlemen. Connect your wallet and interact directly with on-chain contracts —
                        validator delegation, NFT previews, on-chain governance and liquidity, all in one place.
                    </p>
                </div>
            </section>

            <section className="hv2-stack">
                <div className="hv2-section-head">
                    <span className="hv2-section-line" />
                    <span className="hv2-section-label">BUILT WITH</span>
                    <span className="hv2-section-line" />
                </div>
                <div className="hv2-stack__chips">
                    {STACK.map(s => <span className="hv2-stack__chip" key={s}>{s}</span>)}
                </div>
            </section>

            <footer className="hv2-footer">
                <span className="hv2-footer__copy">© 2024 IMREXX HUB. ALL RIGHTS RESERVED.</span>
                <div className="hv2-footer__links">
                    <a href="https://x.com/imrexx_dev"       target="_blank" rel="noopener noreferrer">X</a>
                    <a href="https://t.me/Imrexx93"            target="_blank" rel="noopener noreferrer">TELEGRAM</a>
                    <a href="https://github.com/Imrexxx-OG/imrexxHub" target="_blank" rel="noopener noreferrer">GITHUB</a>
                </div> 
            </footer>
        </div>
    );
}
