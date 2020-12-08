import React, { useEffect, useRef, useState } from 'react';

// components
import Header from './Header';
import About from './About';
import Skills from './Skills';

import { smoothScrollTo } from '../util';
import './Home.scss';

function Home() {
  const [sectionCurrent, setSectionCurrent] = useState('about');
  const refAbout = useRef();
  const refSkills = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.2 });
    observeRef(observer, refAbout);
    observeRef(observer, refSkills);

    return () => observer.disconnect();
  }, []);
  
  // methods
  function handleIntersect(entries) {
    entries.forEach(entry => {
      console.log(entry.target.className, entry.isIntersecting);

      if (entry.isIntersecting) {
        smoothScrollTo(entry.target.offsetTop);
        setSectionCurrent(entry.target.className);
      };
    })
  };

  function observeRef(observer, ref) {
    observer.observe(ref.current);
  }

  return (
    <>
      <Header
        refAbout={refAbout}
        refSkills={refSkills}
        sectionCurrent={sectionCurrent}
        />
      <main className="main">
        <About 
          refAbout={refAbout} />
        <Skills 
          refSkills={refSkills} />
      </main>
    </>
  );
}

export default Home;