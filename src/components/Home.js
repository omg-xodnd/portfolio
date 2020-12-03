import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import './Home.scss';

function Home() {
  const SectionTitle = ({ title }) => (
    <div className="section-title-wrap">
      <h1 className="section-title">
        { title }
        <div className="section-title-dot1"></div>
        <div className="section-title-dot2"></div>
      </h1>
    </div>
  )

  return (
    <>
      <Header />
      <main className="main">
        <About SectionTitle={SectionTitle} />
        <Skills SectionTitle={SectionTitle} />
      </main>
    </>
  );
}

export default Home;