import React, { useState, useEffect, useCallback } from 'react';
import WalletConnection from './WalletConnection';
import './pages.css';
import './showcase-upgrade.css';

const BASE_URL = 'https://moccasin-wrong-prawn-350.mypinata.cloud/ipfs/bafybeibfdmxc2qrxnktqh6xfqzcvusiwlvwtrjtykz7gownbjahuw7dsm4';

const NFT_META = [
    { id: 1,  name: 'IMREXX #1',  rarity: 'LEGENDARY', traits: { CLOTHES: 'BLACK HOODIE', DNA: 'SHARK TEETH', EYES: 'BLUE EYES', GLOVES: 'BLACK', 'HEAD GEAR': 'VR', PANTS: 'GREY LONG PANTS', SHOES: 'BLACK' } },
    { id: 2,  name: 'IMREXX #2',  rarity: 'EPIC',       traits: { CLOTHES: 'LEATHER JACKET', DNA: 'EAGLE EYE', EYES: 'RED EYES', GLOVES: 'WHITE', 'HEAD GEAR': 'CAP', PANTS: 'BLACK CARGO', SHOES: 'RED KICKS' } },
    { id: 3,  name: 'IMREXX #3',  rarity: 'RARE',       traits: { CLOTHES: 'DENIM JACKET', DNA: 'WOLF FANGS', EYES: 'GOLD EYES', GLOVES: 'NONE', 'HEAD GEAR': 'HEADBAND', PANTS: 'WHITE JEANS', SHOES: 'WHITE' } },
    { id: 4,  name: 'IMREXX #4',  rarity: 'UNCOMMON',   traits: { CLOTHES: 'TRACKSUIT', DNA: 'BEAR CLAWS', EYES: 'GREEN EYES', GLOVES: 'GREY', 'HEAD GEAR': 'HOOD', PANTS: 'JOGGERS', SHOES: 'GREY BOOTS' } },
    { id: 5,  name: 'IMREXX #5',  rarity: 'EPIC',       traits: { CLOTHES: 'CYBER VEST', DNA: 'SERPENT SCALE', EYES: 'PURPLE EYES', GLOVES: 'NEON', 'HEAD GEAR': 'VISOR', PANTS: 'SHORTS', SHOES: 'PLATFORM' } },
    { id: 6,  name: 'IMREXX #6',  rarity: 'RARE',       traits: { CLOTHES: 'SUIT JACKET', DNA: 'TIGER STRIPES', EYES: 'SILVER EYES', GLOVES: 'BLUE', 'HEAD GEAR': 'BERET', PANTS: 'SLACKS', SHOES: 'LOAFERS' } },
    { id: 7,  name: 'IMREXX #7',  rarity: 'LEGENDARY',  traits: { CLOTHES: 'TRENCH COAT', DNA: 'DRAGON SCALE', EYES: 'FIRE EYES', GLOVES: 'ARMORED', 'HEAD GEAR': 'HELMET', PANTS: 'COMBAT PANTS', SHOES: 'COMBAT BOOTS' } },
    { id: 8,  name: 'IMREXX #8',  rarity: 'COMMON',     traits: { CLOTHES: 'T-SHIRT', DNA: 'FOX FUR', EYES: 'BROWN EYES', GLOVES: 'NONE', 'HEAD GEAR': 'BEANIE', PANTS: 'BLUE JEANS', SHOES: 'SNEAKERS' } },
    { id: 9,  name: 'IMREXX #9',  rarity: 'UNCOMMON',   traits: { CLOTHES: 'HOODIE', DNA: 'HAWK VISION', EYES: 'GREY EYES', GLOVES: 'FINGERLESS', 'HEAD GEAR': 'NONE', PANTS: 'CHINOS', SHOES: 'SLIP-ONS' } },
    { id: 10, name: 'IMREXX #10', rarity: 'RARE',       traits: { CLOTHES: 'BOMBER', DNA: 'PANTHER CLAW', EYES: 'ICE EYES', GLOVES: 'LEATHER', 'HEAD GEAR': 'EAR CUPS', PANTS: 'CARGOS', SHOES: 'ANKLE BOOTS' } },
    { id: 11, name: 'IMREXX #11', rarity: 'EPIC',       traits: { CLOTHES: 'KIMONO', DNA: 'KITSUNE MARK', EYES: 'AMBER EYES', GLOVES: 'SILK', 'HEAD GEAR': 'KASA HAT', PANTS: 'HAKAMA', SHOES: 'TABI' } },
    { id: 12, name: 'IMREXX #12', rarity: 'COMMON',     traits: { CLOTHES: 'VEST', DNA: 'OWL EYE', EYES: 'HAZEL EYES', GLOVES: 'NONE', 'HEAD GEAR': 'SNAPBACK', PANTS: 'KHAKIS', SHOES: 'CANVAS' } },
];

const RARITY_ORDER = ['LEGENDARY', 'EPIC', 'RARE', 'UNCOMMON', 'COMMON'];
const RARITY_COLOR = { LEGENDARY: '#ffd700', EPIC: '#bf40ff', RARE: '#00e5ff', UNCOMMON: '#00ff88', COMMON: 'rgba(255,255,255,0.45)' };

export default function Showcase() {
    const [selected, setSelected] = useState(null);
    const [filter, setFilter]     = useState('ALL');
    const [loaded, setLoaded]     = useState({});

    const nfts = Array.from({ length: 21 }, (_, i) => ({
        ...(NFT_META[i % NFT_META.length]),
        id: i + 1,
        name: `IMREXX #${i + 1}`,
        image: BASE_URL,
    }));

    const filtered = filter === 'ALL' ? nfts : nfts.filter(n => n.rarity === filter);
    const close = useCallback(() => setSelected(null), []);

    useEffect(() => {
        if (!selected) return;
        const handler = (e) => { if (e.key === 'Escape') close(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [selected, close]);

    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [selected]);

    return (
        <div className="page">
            <div className="page-header">
                <div className="page-header__left">
                    <div className="page-header__eyebrow">LUKSO MAINNET</div>
                    <h2 className="page-header__title">SHOWCASE</h2>
                    <p className="page-header__desc">
                        Exclusive NFT collection — launching on Lukso Mainnet. Click any piece to explore traits and download options.
                    </p>
                </div>
                <WalletConnection />
            </div>

            <div className="page-content">
                <div className="showcase-filters">
                    {['ALL', ...RARITY_ORDER].map(r => (
                        <button
                            key={r}
                            className={`showcase-filter ${filter === r ? 'showcase-filter--active' : ''}`}
                            style={filter === r && r !== 'ALL' ? { borderColor: RARITY_COLOR[r], color: RARITY_COLOR[r] } : {}}
                            onClick={() => setFilter(r)}
                        >
                            {r !== 'ALL' && <span className="showcase-filter__dot" style={{ background: RARITY_COLOR[r] }} />}
                            {r}
                        </button>
                    ))}
                    <span className="showcase-count">{filtered.length} ITEMS</span>
                </div>

                <div className="showcase-grid">
                    {filtered.map((nft) => (
                        <div key={nft.id} className="nft-card" onClick={() => setSelected(nft)}>
                            <div className="nft-card__img-wrap">
                                <img
                                    src={nft.image}
                                    alt={nft.name}
                                    className={`nft-card__img ${loaded[nft.id] ? 'nft-card__img--loaded' : ''}`}
                                    onLoad={() => setLoaded(p => ({ ...p, [nft.id]: true }))}
                                    loading="lazy"
                                />
                                <div className="nft-card__overlay"><span>VIEW DETAILS →</span></div>
                            </div>
                            <div className="nft-card__info">
                                <span className="nft-card__name">{nft.name}</span>
                                <span className="nft-card__rarity" style={{ color: RARITY_COLOR[nft.rarity] }}>
                                    {nft.rarity}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div className="nft-modal-overlay" onClick={close}>
                    <div className="nft-modal" onClick={e => e.stopPropagation()}>
                        <button className="nft-modal__close" onClick={close} aria-label="Close">✕</button>
                        <div className="nft-modal__body">
                            <div className="nft-modal__left">
                                <img src={selected.image} alt={selected.name} className="nft-modal__img" />
                                <div className="nft-modal__links">
                                    <a href="#" className="nft-modal__link">VIEW ON UNIVERSAL PAGE ↗</a>
                                    <a href="#" className="nft-modal__link">3D MODEL PREVIEW ↗</a>
                                </div>
                            </div>
                            <div className="nft-modal__right">
                                <div className="nft-modal__collection">IMREXX COLLECTION</div>
                                <h2 className="nft-modal__name">{selected.name}</h2>
                                <span
                                    className="nft-modal__rarity"
                                    style={{ color: RARITY_COLOR[selected.rarity], borderColor: RARITY_COLOR[selected.rarity] + '44' }}
                                >
                                    ◈ {selected.rarity}
                                </span>
                                <div className="nft-modal__section-label">TRAITS</div>
                                <div className="nft-modal__traits">
                                    {Object.entries(selected.traits).map(([k, v]) => (
                                        <div className="nft-modal__trait" key={k}>
                                            <span className="nft-modal__trait-key">{k}</span>
                                            <span className="nft-modal__trait-val">{v}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="nft-modal__section-label">DOWNLOADS</div>
                                <div className="nft-modal__downloads">
                                    {['PROFILE PICTURE', 'FULL VIEW', '3D MODEL', 'T-POSE', 'TRANSPARENCY VIEW', 'ANIMATION'].map(d => (
                                        <button key={d} className="nft-modal__dl-btn">↓ {d}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}