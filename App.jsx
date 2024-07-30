import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Showcase from './components/Showcase';
import Stake from './components/Stake';
import Governance from './components/Governance';
import Pool from './components/Pool';
import Home from './components/Home';
import Send from './components/Send';
import Airdrop from './components/Airdrop';


export default function App() {

    return (
        <div className="container dark">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/send" element={<Send />} />
                <Route path="/stake" element={<Stake />} />
                <Route path="/pool" element={<Pool />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/airdrop" element={<Airdrop />} />
            </Routes>
        </div>
    )
}
