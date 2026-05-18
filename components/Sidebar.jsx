import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const NAV_LINKS = [
    { to: '/',           icon: 'https://img.icons8.com/?size=100&id=2797&format=png&color=ffffff',         label: 'HOME'       },
    { to: '/showcase',   icon: 'https://img.icons8.com/?size=100&id=pB77uEobJRjy&format=png&color=ffffff', label: 'SHOWCASE'   },
    { to: '/send',       icon: 'https://img.icons8.com/?size=100&id=tilQqfyZ0RGd&format=png&color=ffffff', label: 'SEND'       },
    { to: '/stake',      icon: 'https://img.icons8.com/?size=100&id=RrPSBmPFk06w&format=png&color=ffffff', label: 'STAKE'      },
    { to: '/pool',       icon: 'https://img.icons8.com/?size=100&id=117102&format=png&color=ffffff',        label: 'POOL'       },
    { to: '/governance', icon: 'https://img.icons8.com/?size=100&id=79629&format=png&color=ffffff',         label: 'GOVERNANCE' },
    { to: '/roadmap',    icon: 'https://img.icons8.com/?size=100&id=85028&format=png&color=ffffff',         label: 'ROADMAP'    },
];

export default function Sidebar({ isSidebarVisible, toggleSidebar }) {
    const location = useLocation();

    const isActive = (path) =>
        path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    return (
        <>
            {isSidebarVisible && (
                <div className="sb-overlay" onClick={toggleSidebar} aria-hidden="true" />
            )}
            <nav className={`sb ${isSidebarVisible ? 'sb--open' : ''}`}>

                <div className="sb-logo">
                    <h1 className="glitch sb-logo__text">IMREXX</h1>
                    <span className="sb-logo__sub">HUB</span>
                </div>

                <button className="sb-close" onClick={toggleSidebar} aria-label="Close menu">✕</button>

                <div className="sb-nav">
                    {NAV_LINKS.map(({ to, icon, label }) => (
                        <Link
                            to={to}
                            key={to}
                            className={`sb-link ${isActive(to) ? 'sb-link--active' : ''}`}
                            onClick={() => isSidebarVisible && toggleSidebar()}
                        >
                            <img src={icon} alt="" className="sb-link__icon" aria-hidden="true" />
                            <span className="sb-link__label">{label}</span>
                            {isActive(to) && <span className="sb-link__pip" aria-hidden="true" />}
                        </Link>
                    ))}
                </div>

                <div className="sb-footer">
                    <span className="sb-footer__text">LUKSO MAINNET</span>
                    <span className="sb-footer__dot" />
                </div>
            </nav>
        </>
    );
}