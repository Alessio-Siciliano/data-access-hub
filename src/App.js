import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Drawer from './components/Drawer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreatePublication from './pages/CreatePublication';

function App() {
    return (
        <Router>
            <div className="drawer drawer-mobile">
                {/* Lateral menu */}
                <input 
                    id="my-drawer" 
                    type="checkbox" 
                    className="drawer-toggle" 
                />
                <div className="drawer-content">
                    <div className="bg-gray-100">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/Create-publication" element={<CreatePublication />} />
                        </Routes>
                    </div>
                </div>
                <Drawer />
            </div>

            
        </Router>
    );
}

export default App;
