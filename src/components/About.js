import React from 'react';
import './About.scss';
import Skills from './Skills';

function About() {

  return (
    <section className="about">
      <h1>
        ABOUT
        <div className="h1-deco"></div>
      </h1>

      <h2>PROFILE</h2>
      
      <h2>SKILLS</h2>
      <Skills />
      
      <h2>EDUCATION</h2>
      <article>
        <ul>
          <li>삼성 청년 소프트웨어 아카데미 (SSAFY) 3기</li>
        </ul>
      </article>
      
    </section>
  );
}

export default About;