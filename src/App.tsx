import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoveryPage from './pages/DiscoveryPage';

const getBasename = (): string => {
  const homepage = process.env.PUBLIC_URL || '';
  if (homepage && homepage !== '/') {
    try {
      const url = new URL(homepage);
      return url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname;
    } catch {
      return '';
    }
  }
  return '';
};

const App: React.FC = () => {
  const basename = getBasename();
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rdv-decouverte" element={<DiscoveryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
