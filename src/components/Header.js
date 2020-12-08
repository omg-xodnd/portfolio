import React from 'react';
import { smoothScrollTo } from '../util';
import './Header.scss';

function Header({ refAbout, refSkills, sectionCurrent }) {  
  const sectionTitles = ['about', 'skills'];
  const refs = {
    about: refAbout,
    skills: refSkills,
  };

  // components
  const NavItem = ({ title }) => (
    <li
      onClick={() => smoothScrollTo(refs[title].current?.offsetTop)}
      className={
      sectionCurrent === title ? 'nav-item-active' : ''
    }>{ title }</li>
  );


  const HeaderNav = () => (
    <div className="header-nav">
      <ul>
        { sectionTitles.map((title, idx) => <NavItem title={title} key={idx} />) }
      </ul>
    </div>
  );
  

  return (
    <header className="header">
      <div className="logo"></div>
      <HeaderNav />
    </header>
  );
}

export default Header;