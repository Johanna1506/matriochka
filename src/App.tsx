import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoveryPage from './pages/DiscoveryPage';

const getBasename = (): string => {
  // En développement, pas de basename
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // En production, détecter depuis window.location
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const segments = pathname.split('/').filter(Boolean);
    
    // Si on est sur GitHub Pages (pathname contient /matriochka/)
    if (segments.length > 0 && segments[0] === 'matriochka') {
      return '/matriochka';
    }
    
    // Si on est à la racine, pas de basename
    if (segments.length === 0) {
      return '';
    }
    
    // Sinon, utiliser le premier segment comme basename
    return '/' + segments[0];
  }
  
  // Fallback: utiliser PUBLIC_URL
  const publicUrl = process.env.PUBLIC_URL || '';
  if (publicUrl && publicUrl !== '/') {
    if (publicUrl.startsWith('/')) {
      return publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
    }
    try {
      const url = new URL(publicUrl);
      const pathname = url.pathname;
      return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    } catch {
      // Ignore
    }
  }
  
  return '';
};

const RedirectHandler: React.FC<{ basename: string }> = ({ basename }) => {
  const location = useLocation();

  useEffect(() => {
    // Gérer les redirections depuis 404.html
    // Le script 404.html redirige vers /matriochka/?/route
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('/');
    
    if (redirectPath) {
      // Nettoyer le chemin et reconstruire l'URL avec le basename
      const cleanPath = redirectPath.replace(/~and~/g, '&');
      const newPath = basename + (cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath);
      
      // Remplacer l'URL et recharger pour que React Router prenne en compte la nouvelle route
      window.history.replaceState({}, '', newPath);
      window.location.reload();
    }
  }, [location, basename]);

  return null;
};

const App: React.FC = () => {
  const basename = getBasename();
  
  return (
    <Router basename={basename}>
      <RedirectHandler basename={basename} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rdv-decouverte" element={<DiscoveryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
