import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">TAEWOONG_PARK</div>
      <nav className="header-nav">
        <ul>
          <li className="header-nav-item">ABOUT</li>
          <li className="header-nav-item">PROJECTS</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;