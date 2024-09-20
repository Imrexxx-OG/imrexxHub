import React, { useState } from 'react';
import './navigation.css';
import WalletConnection from './WalletConnection'

const initialValidators = [
    { name: 'Validator 1', votingPower: '12000 MTRG', share: '20%', commission: '5%', uptime: '100%', status: 'Active' },
    { name: 'Validator 2', votingPower: '15000 MTRG', share: '25%', commission: '4%', uptime: '100%', status: 'Active' },
    { name: 'Validator 3', votingPower: '8500 MTRG', share: '15%', commission: '6%', uptime: '99.7%', status: 'Active' },
    { name: 'Validator 4', votingPower: '6000 MTRG', share: '10%', commission: '7%', uptime: '99.6%', status: 'Inactive' },
    { name: 'Validator 5', votingPower: '9000 MTRG', share: '12%', commission: '5%', uptime: '99.5%', status: 'Active' },
    { name: 'Validator 6', votingPower: '9900 MTRG', share: '18%', commission: '3%', uptime: '99.4%', status: 'Active' },
    { name: 'Validator 7', votingPower: '1500 MTRG', share: '25%', commission: '5%', uptime: '100%', status: 'Active' },
    { name: 'Validator 8', votingPower: '9500 MTRG', share: '15%', commission: '6%', uptime: '100%', status: 'Active' },
    { name: 'Validator 9', votingPower: '6000 MTRG', share: '10%', commission: '7%', uptime: '99.6%', status: 'Inactive' },
    { name: 'Validator 10', votingPower: '9000 MTRG', share: '10%', commission: '5%', uptime: '99.5%', status: 'Inactive' }
];

export default function Stake() {
    const [searchTerm, setSearchTerm] = useState('');
    const [validators, setValidators] = useState(initialValidators);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        const filteredValidators = initialValidators.filter(validator =>
            validator.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setValidators(filteredValidators);
    };

    return (
        <div className="wrapper">
            <div className="wallet-container">
                <WalletConnection />
            </div>
            <div className="stake-container">
                <h2 className="stake-title">Stake Your MTRG Tokens</h2>
                <p className="stake-description">
                    Staking allows you to earn rewards by participating in network validation. By delegating your tokens to a validator, you help secure the network and earn a share of the block rewards. Choose a validator based on their performance metrics and your preferences.
                </p>
                <input
                    type="text"
                    placeholder="Search for a validator..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <div className="table-container">
                    <div className="validator-table">
                        <div className="table-header">
                            <div className="table-column">Validator</div>
                            <div className="table-column">Voting Power</div>
                            <div className="table-column">%Share</div>
                            <div className="table-column">Commission</div>
                            <div className="table-column">Uptime</div>
                            <div className="table-column">Status</div>
                        </div>
                        {validators.map((validator, index) => (
                            <div className="table-row" key={index}>
                                <div className="table-column">{validator.name}</div>
                                <div className="table-column">{validator.votingPower}</div>
                                <div className="table-column">{validator.share}</div>
                                <div className="table-column">{validator.commission}</div>
                                <div className="table-column">{validator.uptime}</div>
                                <div className="table-column">{validator.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    );
}
