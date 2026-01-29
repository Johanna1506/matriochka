import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoveryPage from './pages/DiscoveryPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rdv-decouverte" element={<DiscoveryPage />} />
    </Routes>
  </Router>
);

export default App;
