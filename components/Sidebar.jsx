import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({isSidebarVisible, toggleSidebar}) {
    const [isCommunity, setIsCommunity] = useState(false);

    const toggleCommunity = () => {
        setIsCommunity(!isCommunity);
    };

    return (
        <nav className={`dark ${isSidebarVisible ? 'sidebar-open' : '' }`}>
            <h1 className='glitch'>IMREXX HUB</h1>
            <div id="hamburger" className="hamburger" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navbar">
                <input type="text" placeholder="Search" />
                <Link to="/">
                    <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=ffffff" alt="Home" />
                    <p>HOME</p>
                </Link>
                <Link to="/showcase">
                    <img src="https://img.icons8.com/?size=100&id=pB77uEobJRjy&format=png&color=ffffff" alt="Showcase" />
                    <p>SHOWCASE</p>
                </Link>
                <Link to="/send">
                    <img src="https://img.icons8.com/?size=100&id=tilQqfyZ0RGd&format=png&color=000000" alt="Send-token" />
                    <p>SEND</p>
                </Link>
                <Link to="/stake">
                    <img src="https://img.icons8.com/?size=100&id=RrPSBmPFk06w&format=png&color=000000" alt="Stake-token" />
                    <p>STAKE</p>
                </Link>
                <Link to="/pool">
                    <img src="https://img.icons8.com/?size=100&id=117102&format=png&color=ffffff" alt="Pool" />
                    <p>POOL</p>
                </Link>
                <Link to="/governance">
                    <img src="https://img.icons8.com/?size=100&id=79629&format=png&color=ffffff" alt="Governance" />
                    <p>GOVERNANCE</p>
                </Link>
                <Link to="/airdrop">
                    <img src="https://img.icons8.com/?size=100&id=wo4W49QJRo7C&format=png&color=ffffff" alt="Digital Airdrop" />
                    <p>AIRDROP</p>
                </Link>
                <div className="dropcommunity">
                    <div onClick={toggleCommunity} className="dropcommunity-toggle">
                        <img src="https://img.icons8.com/?size=100&id=J715ns61u5eV&format=png&color=ffffff" width={20} alt="Community" />
                        <p>COMMUNITY</p>
                    </div>
                    {isCommunity && (
                        <div className={`dropcommunity-menu ${isCommunity ? "active" : ""}` }>
                            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">Telegram</a>
                            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://discord.com/invite/yourdiscord" target="_blank" rel="noopener noreferrer">Discord</a>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
}