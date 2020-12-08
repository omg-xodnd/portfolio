import React from 'react';
import logo from '../util/skillsLogo';
import './Skills.scss';

function Skills({ refSkills }) {

  // components
  const Item = ({ name, src }) => (
    <figure className="skills-figure">
      <img className="skills-img" src={src} alt=""/>
      <figcaption>{ name }</figcaption>
    </figure>
  );

  const itemGrid = (items) => (
    Object.entries(items).map(
      ([ name, src ], idx) => <Item name={name} src={src} key={idx} />
    )
  );

  return (
    <section ref={refSkills} className="skills">
      <h1 className="section-title">Skills</h1>
      <div className="skills-grid">{ itemGrid(logo) }</div>
    </section>
  );
}

export default Skills;