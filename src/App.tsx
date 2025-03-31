import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import LegalPage from './pages/Legal';
import { Watch } from './pages/Watch';
import { Discover } from './pages/Discover';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter basename="/movies">
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const isWatchPage = location.pathname.startsWith('/watch') || location.pathname.match(/^\/(movie|tv)\/\d+/);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Hide Navigation on Watch Page */}
      {!isWatchPage && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/:type/:id" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
