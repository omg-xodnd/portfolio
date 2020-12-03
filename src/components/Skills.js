import React from 'react';
import logo from '../util/logo';
import './Skills.scss';

function Skills({ SectionTitle }) {

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
    <div className="skills-wrap">
      <section className="skills">
        <SectionTitle title={'Skills'} />
        <div className="skills-grid">{ itemGrid(logo) }</div>
      </section>
    </div>
  );
}

export default Skills;