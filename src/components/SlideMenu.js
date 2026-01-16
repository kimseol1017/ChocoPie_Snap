import React from 'react';

export default function SlideMenu({ isOpen, onClose }) {
  return (
    <div className={`slide-menu-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div
        className={`slide-menu ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <nav className="menu-list">
          <a href="#about" onClick={onClose}>작가소개</a>
          <a href="https://www.instagram.com/chocopie_snap" onClick={onClose}>촬영문의</a>
          <a href="#reservation" onClick={onClose}>촬영예약</a>
        </nav>
      </div>
    </div>
  );
}
