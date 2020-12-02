import React from 'react';
import './About.scss';
import Skills from './Skills';

function About() {

  return (
    <section className="about">
      <h1>ABOUT</h1>
      <h2>SKILLS</h2>
        <Skills />
      <h2>EDUCATION</h2>
    </section>
  );
}

export default About;