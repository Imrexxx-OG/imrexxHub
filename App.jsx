import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Showcase from './components/Showcase';
import Stake from './components/Stake';
import Governance from './components/Governance';
import Pool from './components/Pool';
import Home from './components/Home';
import Send from './components/Send';
import Roadmap from './components/Roadmap';
import MobileMenu from './components/MobileMenu';
import './style.css';

export default function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    // Fixed: was `sidebar => !isSidebarVisible` (stale closure bug)
    const toggleSidebar = () => setIsSidebarVisible(prev => !prev);

    return (
        <div className="container dark">
            <MobileMenu toggleSidebar={toggleSidebar} />
            <Sidebar
                isSidebarVisible={isSidebarVisible}
                toggleSidebar={toggleSidebar}
            />
            <main className="app-main">
                <Routes>
                    <Route path="/"           element={<Home />} />
                    <Route path="/showcase"   element={<Showcase />} />
                    <Route path="/send"       element={<Send />} />
                    <Route path="/stake"      element={<Stake />} />
                    <Route path="/pool"       element={<Pool />} />
                    <Route path="/governance" element={<Governance />} />
                    <Route path="/roadmap"    element={<Roadmap />} />
                    <Route path="*"           element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}
