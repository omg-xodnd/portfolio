import React, { useEffect, useRef } from 'react';
import { createObserver } from '../util';
import './Home.scss';

function Home({ state, methods }) {
  const { isIntroEnded } = state;
  const { setIntroEnded } = methods;
  const homeOverlay = useRef();

  function onIntersect(entries) {
    entries.forEach(entry => { 
      if (entry.isIntersecting) { setIntroEnded(true); };
    });
  };

  useEffect(() => {
    let observer = !isIntroEnded ? createObserver(onIntersect) : '';
    if (observer) { observer.observe(homeOverlay.current); };

    return () => {
      if (!isIntroEnded) { observer.disconnect() };
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
          <header className="header"></header>
          <main>우하하</main>
        </>
      }
    </div>
  );
}

export default Home;