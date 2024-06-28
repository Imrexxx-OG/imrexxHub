import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './navigation.css';
import WalletConnection from './WalletConnection'

export default function Pool() {
    const [pools, setPools] = useState([]);
    const [selectedPool, setSelectedPool] = useState(null);
    const [amountA, setAmountA] = useState('');
    const [amountB, setAmountB] = useState('');

    useEffect(() => {
        const fetchPools = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 10,
                        page: 1,
                        sparkline: false,
                    },
                });

                // Example pairs for liquidity pools
                const examplePairs = [
                    { id: 1, tokenA: response.data[0], tokenB: response.data[1] },
                    { id: 2, tokenA: response.data[2], tokenB: response.data[3] },
                    { id: 3, tokenA: response.data[4], tokenB: response.data[5] },
                ];

                setPools(examplePairs);
            } catch (error) {
                console.error("Error fetching pools:", error);
            }
        };

        fetchPools();
    }, []);

    const handlePoolSelect = (pool) => {
        setSelectedPool(pool);
        setAmountA('');
        setAmountB('');
    };

    const handleAmountAChange = (e) => {
        const value = e.target.value;
        setAmountA(value);
        if (selectedPool) {
            setAmountB((value * selectedPool.tokenA.current_price / selectedPool.tokenB.current_price).toFixed(6));
        }
    };

    const handleAmountBChange = (e) => {
        const value = e.target.value;
        setAmountB(value);
        if (selectedPool) {
            setAmountA((value * selectedPool.tokenB.current_price / selectedPool.tokenA.current_price).toFixed(6));
        }
    };

    const handleProvideLiquidity = () => {
        alert(`Providing liquidity for ${selectedPool.tokenA.symbol.toUpperCase()}-${selectedPool.tokenB.symbol.toUpperCase()} pool: ${amountA} ${selectedPool.tokenA.symbol.toUpperCase()} and ${amountB} ${selectedPool.tokenB.symbol.toUpperCase()}`);
    };

    return (
        <div className="pool-container">
            <WalletConnection />
            <h2 className="pool-title">Liquidity Pools</h2>
            <div className="pool-list">
                {pools.map(pool => (
                    <div key={pool.id} className="pool-card" onClick={() => handlePoolSelect(pool)}>
                        <h2 className="pool-name">{pool.tokenA.symbol.toUpperCase()} - {pool.tokenB.symbol.toUpperCase()}</h2>
                        <img src={pool.tokenA.image} alt={pool.tokenA.name} className="token-image" />
                        <img src={pool.tokenB.image} alt={pool.tokenB.name} className="token-image" />
                        <p className="pool-price">{pool.tokenA.name} - ${pool.tokenA.current_price.toFixed(2)} / {pool.tokenB.name} - ${pool.tokenB.current_price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            {selectedPool && (
                <div className="liquidity-form">
                    <h2 className="form-title">Provide Liquidity for {selectedPool.tokenA.symbol.toUpperCase()} - {selectedPool.tokenB.symbol.toUpperCase()}</h2>
                    <div className="form-group">
                        <label>{selectedPool.tokenA.symbol.toUpperCase()} Amount:</label>
                        <input
                            type="number"
                            value={amountA}
                            onChange={handleAmountAChange}
                            placeholder={`Enter amount of ${selectedPool.tokenA.symbol.toUpperCase()}`}
                        />
                    </div>
                    <div className="form-group">
                        <label>{selectedPool.tokenB.symbol.toUpperCase()} Amount:</label>
                        <input
                            type="number"
                            value={amountB}
                            onChange={handleAmountBChange}
                            placeholder={`Enter amount of ${selectedPool.tokenB.symbol.toUpperCase()}`}
                        />
                    </div>
                    <button className="provide-button" onClick={handleProvideLiquidity}>Provide Liquidity</button>
                </div>
            )}
        </div>
    );
}
