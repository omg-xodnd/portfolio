import React, { useEffect, useRef } from 'react';
import { sleep } from '../util';
import './Intro.scss';

function Intro({ state, stateReducer}) {
  const { isLoaded, isScrolled } = state;
  const setStateRef = useRef(stateReducer);
  const setState = () => setStateRef.current;

  // [effect hooks]
  useEffect(() => {
    async function onMounted() {
      await sleep(2000);
      setState()('isLoaded', true);
    }
    onMounted();
  }, []);

  useEffect(() => autoScroll());

  // [methods]
  async function handleScroll() {
    if (isLoaded && !isScrolled) {
      setState()('isScrolled', true);
      setState()('isIntermissionVisible', true);
      await sleep(500);
      setState()('isFinished', true);
    };
  }
  async function autoScroll() {
    await sleep(1600);
    if (isLoaded && !isScrolled) {
      handleScroll();
    };
  }

  // [return]
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
      
      { isLoaded && 
        <div onClick={handleScroll} className="intro-button-wrap">
          <button className="intro-button">
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      }
    </section>
  );
}

export default Intro;