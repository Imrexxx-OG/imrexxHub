import React from 'react';
import './navigation.css';

export default function Airdrop() {

    return (
        <div className='myContainer'>
            <div className="airdrop-container">
                <h2 className="airdrop-title">Join the Lukso (LYX) Airdrop - Empowering Our Community!</h2>
                <p className="airdrop-text">
                    We're thrilled to announce the Lukso (LYX) Airdrop, designed to give back to our incredible community. 
                    With a commitment to decentralization and community growth, we're distributing 
                    <span className="highlight"> 70% of the total airdrop supply to our valued community members</span>.
                </p>
                
                <h2 className="airdrop-subtitle">Why Participate in the Lukso (LYX) Airdrop?</h2>
                <ul className="airdrop-list">
                    <li><b>Be a Part of Something Bigger:</b> This airdrop is not just a giveaway; it's a celebration of our journey together. By participating, you become an integral part of the Lukso ecosystem, contributing to its growth and success.</li>
                    <li><b>Empower Decentralization:</b> At Lukso, we believe in the power of decentralization. By distributing LYX tokens to the community, we are fostering a more decentralized and robust network, reducing the reliance on centralized entities.</li>
                    <li><b>Rewarding Our Loyal Supporters:</b> This airdrop is our way of saying thank you to our dedicated supporters. Your loyalty and belief in the Lukso vision are the pillars of our success, and we want to ensure you are rewarded.</li>
                    <li><b>Boost Your Crypto Portfolio:</b> Adding LYX tokens to your portfolio enhances its diversity and offers potential growth opportunities as the Lukso ecosystem expands and evolves.</li>
                </ul>
                
                <h2 className="airdrop-subtitle">How to Participate</h2>
                <ol className="airdrop-steps">
                    <li><b>Connect Your Wallet:</b> Ensure your wallet is compatible with the Ethereum network and can store LYX tokens.</li>
                    <li><b>Verify Your Eligibility:</b> Complete the eligibility criteria, including tasks such as following our social media channels, joining our community groups, and engaging with our content.</li>
                    <li><b>Claim Your Tokens:</b> Once verified, you will be able to claim your share of the airdrop directly into your wallet.</li>
                </ol>
                
                <p className="airdrop-text">
                    We will be sharing more details on the eligibility criteria, timelines, and exact steps to claim your tokens soon. 
                    Stay connected with us on our social media channels and join our community discussions to ensure you don't miss any updates.
                </p>
                
                <div className="airdrop-social">
                    <h3 className="airdrop-subtitle">Follow Us on Social Media:</h3>
                    <ul className="airdrop-social-list">
                        <li><a href="https://twitter.com/Meter_io" target="_blank" rel="noopener noreferrer">Twitter: @Lukso_io</a></li>
                        <li><a href="https://t.me/Lukso_io" target="_blank" rel="noopener noreferrer">Telegram: Lukso Official Group</a></li>
                        <li><a href="https://discord.gg/Lukso_io" target="_blank" rel="noopener noreferrer">Discord: Join our Discord</a></li>
                    </ul>
                </div>
                
                <h2 className="airdrop-subtitle">Frequently Asked Questions (FAQ)</h2>
                <div className="faq">
                    <h3 className="faq-question">What is Lukso (LYX)?</h3>
                    <p className="faq-answer">Lukso (LYX) is the native token of the Lukso sidechain on Ethereum, designed to power the Lukso ecosystem, enabling fast and low-cost transactions while maintaining robust security.</p>

                    <h3 className="faq-question">Who is eligible for the airdrop?</h3>
                    <p className="faq-answer">The airdrop is open to all community members who meet the eligibility criteria, which will be announced soon. Stay tuned to our social media channels for updates.</p>

                    <h3 className="faq-question">How will the airdrop be distributed?</h3>
                    <p className="faq-answer">50% of the total airdrop supply will be distributed to the community. The distribution details, including the exact amount and timeline, will be provided in our upcoming announcements.</p>

                    <h3 className="faq-question">Can I participate if I am new to the Lukso community?</h3>
                    <p className="faq-answer">Absolutely! We welcome new members to join our community, complete the eligibility tasks, and participate in the airdrop.</p>
                </div>
            </div>
        </div>
    )
}