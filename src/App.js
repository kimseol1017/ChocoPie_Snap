import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SlideMenu from './components/SlideMenu';
import Services from './components/Services';
import InstagramPreview from './components/InstagramPreview';
import Reservation from './components/Reservation';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // 🔥 About 위치 참조
  const aboutRef = useRef(null);

  // 🔥 작가소개로 스크롤 이동
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMenuOpen(false); // 메뉴에서 눌렀을 경우 자동 닫힘
  };

  return (
    <>
      <Header
        onOpenProfile={scrollToAbout}
        onOpenMenu={() => setMenuOpen(true)}
      />

      <SlideMenu
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onGoAbout={scrollToAbout}   // 👈 슬라이드 메뉴에서도 사용
      />

      <main className="container">
        <Hero onOpenProfile={scrollToAbout} />
        <InstagramPreview />
        <About ref={aboutRef} />
        <Services />
        <Reservation />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} CHOCOPIE SNAP
      </footer>
    </>
  );
}

export default App;
