import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './navigation.css';

export default function Home() {
    const [mtrgPrice, setMtrgPrice] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMtrgData = async () => {
            try {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers/mtrg-meter-governance');
                console.log('API response:', response.data);

                if (response.data && response.data.quotes.USD.price) {
                    setMtrgPrice(response.data.quotes.USD.price);
                } else {
                    setError("Data not found. Please try again later.");
                }
            } catch (error) {
                console.error("Error fetching MTR data:", error);
                setError("Failed to fetch data. Please try again later.");
            }
        };

        fetchMtrgData();
    }, []);

    return (
        <div className="wrapper">
            <div className="home-container">
                <h2>Meter Governance (MTRG) Price</h2>
                {error ? (
                    <p>{error}</p>
                ) : mtrgPrice !== null ? (
                    <div className="price-info">
                        <p>Current Price: ${mtrgPrice.toFixed(2)}</p>
                    </div>
                ) : (
                    <p>Loading price data...</p>
                )}
            </div>
        </div>
    );
}
