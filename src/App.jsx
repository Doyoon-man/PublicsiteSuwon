import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import ShortcutMenu from './components/ShortcutMenu';
import BoardSection from './components/BoardSection';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import MobileMenu from './components/MobileMenu';

function Home() {
  return (
    <main id="main-content" role="main" className="home-container">
      <div className="mobile-banner-wrapper">
        <MainBanner />
      </div>
      <ShortcutMenu />
      <BoardSection renderBanner={<MainBanner />} />
    </main>
  );
}

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only skip-link" style={{position:'absolute', zIndex: 9999, background:'black', color:'white', padding:'8px'}}>
        본문 바로가기
      </a>
      
      <Header 
        onLoginClick={() => navigate('/login')} 
        onMenuClick={() => setIsMenuActive(true)} 
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen onClose={() => navigate(-1)} />} />
      </Routes>
      
      <Footer />

      {/* 모바일 전체 메뉴 플로우 */}
      {isMenuActive && (
        <MobileMenu 
          onClose={() => setIsMenuActive(false)} 
          onLoginClick={() => { setIsMenuActive(false); navigate('/login'); }}
        />
      )}
    </>
  );
}

export default App;
