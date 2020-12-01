import React, { useEffect } from 'react';
import { sleep, smoothScrollTo } from '../util';
import './Intro.scss';

function Intro({ state, methods }) {
  const { isIntroLoaded } = state;
  const { setIntroLoaded } = methods;

  async function onMount() {
    await sleep(2000);
    setIntroLoaded(true);
  };
  
  useEffect(() => onMount(), []);
  useEffect(() => {
    if (isIntroLoaded) {
      window.addEventListener('scroll', handleScroll);
    };

    return () => {
      if (isIntroLoaded) {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  })

  function handleScroll() {
    smoothScrollTo(window.innerHeight + 5);
  };

  return (
    <section className="intro">
      <div className="intro-title-wrap">
        <div className="intro-title-box"></div>
        <div className="intro-title-text-wrap">
          <h1 className="intro-title-text">
            안녕하세요!<br/>
            <strong>프론트엔드 개발자 </strong>
            <br className="show-under-1024px"/>
            박태웅의 포트폴리오입니다<strong>.</strong>
          </h1>
        </div>
      </div>
      
      { isIntroLoaded && 
        <div onClick={handleScroll} className="intro-button-wrap">
          <button className="intro-button">
            다음 페이지를 보려면 스크롤을 내려주세요.
          </button>
        </div>
      }
    </section>
  );
}

export default Intro;