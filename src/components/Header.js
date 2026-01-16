import React from 'react';

export default function Header({ onOpenProfile, onOpenMenu }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
            <defs>
              <clipPath id="roundClip">
                <rect width="46" height="46" rx="8" ry="8" />
              </clipPath>
            </defs>
            <image
              height={46}
              width={46}
              xlinkHref="/IMG/logo.jpg"
              preserveAspectRatio="none"
              clipPath="url(#roundClip)"
            />
          </svg>
          <span className="logo-text">CHOCOPIE SNAP</span>
        </div>

        {/* 햄버거 메뉴 버튼 */}
        <button className="hamburger" aria-label="menu" onClick={onOpenMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}

