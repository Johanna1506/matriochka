import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const RedirectHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('?/')) {
      const searchParams = new URLSearchParams(location.search);
      const redirectPath = searchParams.get('/');
      
      if (redirectPath) {
        const cleanPath = redirectPath.replace(/~and~/g, '&');
        const newPath = cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;
        window.history.replaceState({}, '', newPath);
        window.location.reload();
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const basename = getBasename();
  
  return (
    <Router basename={basename}>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rdv-decouverte" element={<DiscoveryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
