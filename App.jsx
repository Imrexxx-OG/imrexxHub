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
import MobileMenu from './components/MobileMenu';


export default function App() {
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);

    function toggleSidebar() {
        setIsSidebarVisible(sidebar => !isSidebarVisible);
    }

    return (
        <div className="container dark">
            <MobileMenu isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            
            <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
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
