import React from 'react';
import './About.scss';

function About({ SectionTitle }) {

  return (
    <section className="about">
      <SectionTitle title={'About'} />
    </section>
  );
}

export default About;