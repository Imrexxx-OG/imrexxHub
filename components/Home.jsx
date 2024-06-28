import React from 'react';
import './navigation.css';
import WalletConnection from './WalletConnection'

const Home = () => {
    return (
        <div className="wrapper">
            <div className='home-container'>
                <section id="hero" className="hero-section">
                    <div>
                        <h1>IMREXX HUB</h1>
                        <p>Your central access point to all things Meter Mainnet. </p>
                    </div>
                    <div className="wallet-connection"><WalletConnection /></div>
                    
                </section>

                <section id="intro" className="intro-section">
                    <p className='intro-p'>
                        <strong>IMREXX HUB</strong> is a Meter-Mainnet HUB frontend that provides users with centralized access to all critical on-chain information and more. 
                        Our platform features various components, including:
                    </p>
                    <ul>
                        <li><strong>NFT Showcase:</strong> Discover and preview our exclusive NFT launch on Meter Mainnet.</li>
                        <li><strong>Send:</strong> Transfer coins from one network to another effortlessly.</li>
                        <li><strong>Stake:</strong> Delegate your MTRG tokens to validators and earn passive income.</li>
                        <li><strong>Pool:</strong> Provide liquidity to pools and earn MTRG tokens.</li>
                        <li><strong>Governance:</strong> Participate in network governance by reviewing and voting on proposals.</li>
                        <li><strong>Airdrop:</strong> Join our community for exciting MTRG token airdrops.</li>
                    </ul>
                    <p>
                        Stay tuned for more updates and features as we continue to grow and enhance the ImRexx Hub platform. Thank you for being a part of our journey!
                    </p>
                </section>
        </div>
        <footer className="footer">
                <p>&copy; 2024 ImRexx Hub. All rights reserved.</p>
                <div className="social-media">
                    <a href="#" className="social-icon">Facebook</a>
                    <a href="#" className="social-icon">Twitter</a>
                    <a href="#" className="social-icon">LinkedIn</a>
                </div>
            </footer>
    </div>
    );
};

export default Home;
