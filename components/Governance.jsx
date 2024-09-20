import React, { useState } from 'react';
import './navigation.css';
import WalletConnection from './WalletConnection';

const initialProposals = [
    { id: 1, title: 'Increase Block Size', description: 'Proposal to increase the block size from 1MB to 2MB.', type: 'Technical', endDate: '2024-07-10', status: 'Active' },
    { id: 2, title: 'Reduce Transaction Fees', description: 'Proposal to reduce transaction fees by 50%.', type: 'Economic', endDate: '2024-07-15', status: 'Active' },
    { id: 3, title: 'Introduce New Token', description: 'Proposal to introduce a new native token.', type: 'Economic', endDate: '2024-07-20', status: 'Active' },
    { id: 4, title: 'Implement Sharding', description: 'Proposal to implement sharding to improve scalability.', type: 'Technical', endDate: '2024-07-25', status: 'Inactive' },
    { id: 5, title: 'Upgrade Consensus Mechanism', description: 'Proposal to upgrade the consensus mechanism to Proof of Stake.', type: 'Technical', endDate: '2024-07-30', status: 'Active' },
    { id: 6, title: 'Increase Validator Rewards', description: 'Proposal to increase rewards for validators.', type: 'Economic', endDate: '2024-08-05', status: 'Active' },
    { id: 7, title: 'Add New Governance Feature', description: 'Proposal to add a new feature for governance.', type: 'Governance', endDate: '2024-08-10', status: 'Active' },
    { id: 8, title: 'Enhance Security Measures', description: 'Proposal to enhance security measures for the network.', type: 'Technical', endDate: '2024-08-15', status: 'Inactive' },
    { id: 9, title: 'Decrease Token Supply', description: 'Proposal to decrease the total supply of tokens.', type: 'Economic', endDate: '2024-08-20', status: 'Active' },
    { id: 10, title: 'Expand Ecosystem', description: 'Proposal to expand the ecosystem with new partnerships.', type: 'Governance', endDate: '2024-08-25', status: 'Active' }
];

export default function Governance() {
    const [proposals, setProposals] = useState(initialProposals);

    return (
        <div className="wrapper">
            <div className="wallet-container">
                <WalletConnection />
            </div>
            <div className="governance-main-container">
                <h2 className="governance-title">Governance Proposals</h2>
                <p className="governance-description">
                    Participate in the governance of the network by reviewing and voting on active proposals. Your participation helps shape the future of the network.
                </p>
                <div className='governance-table-container'>
                    <div className="proposal-table">
                        <div className="proposal-table-header">
                            <div className="proposal-table-column">Proposal</div>
                            <div className="proposal-table-column">Description</div>
                            <div className="proposal-table-column">Type</div>
                            <div className="proposal-table-column">End Date</div>
                            <div className="proposal-table-column">Status</div>
                        </div>
                        {proposals.map((proposal) => (
                            <div className="proposal-table-row" key={proposal.id}>
                                <div className="proposal-table-column">{proposal.title}</div>
                                <div className="proposal-table-column">{proposal.description}</div>
                                <div className="proposal-table-column">{proposal.type}</div>
                                <div className="proposal-table-column">{proposal.endDate}</div>
                                <div className="proposal-table-column">{proposal.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
