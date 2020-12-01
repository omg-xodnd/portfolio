import React, { useEffect, useRef } from 'react';
import { createObserver } from '../util';
import Header from './Header';
import './Home.scss';

function Home({ state, methods }) {
  const { isIntroEnded } = state;
  const { setIntroEnded } = methods;
  const homeOverlay = useRef();

  function handleIntersect(entries) {
    entries.forEach(entry => { 
      if (entry.isIntersecting) { setIntroEnded(true); };
    });
  }

  useEffect(() => {
    const observer = createObserver(handleIntersect);
    if (!isIntroEnded) { observer.observe(homeOverlay.current); };

    return () => {
      observer.disconnect();
    }
  });

  const Overlay = () => {
    const className = `home-overlay ${isIntroEnded ? 'home-overlay-hide' : ''}`
    return <div ref={homeOverlay} className={className}></div>
  };

  return (
    <div className="home">
      <Overlay />
      { isIntroEnded &&
        <>
          <Header />
          <main>
            
          </main>
        </>
      }
    </div>
  );
}

export default Home;