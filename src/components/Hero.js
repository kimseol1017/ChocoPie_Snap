import React, { useState, useEffect, useRef } from 'react';

export default function Hero({ onOpenProfile }) {
  const images = ['IMG/7.jpg', 'IMG/4.jpg', 'IMG/5.jpg', 'IMG/8.jpg'];
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  // 슬라이드 전환 애니메이션
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 1s ease-in-out';
      slideRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  return (
    <section className="hero">
      <div className="hero-slider" ref={slideRef}>
        {images.map((img, idx) => (
          <div className="hero-slide" key={idx}>
            <img src={img} alt={`slide-${idx}`} className="hero-img" />
          </div>
        ))}
      </div>

      <div className="hero-overlay">
        <h1 className="hero-title">
          <span className="accent">진심</span>이 담긴,<br />
          <span className="deep">깊이있는 사진</span>
        </h1>

        <p className="overlay-handwriting">우연의 찰나를 담아내다..</p>

        <div className="hero-actions">
          <a className="btn btn-outline" href="https://www.instagram.com/chocopie_snap">촬영문의</a>
          <button className="btn btn-solid" onClick={onOpenProfile}>작가소개</button>
        </div>

        <div className="dots" aria-hidden>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
