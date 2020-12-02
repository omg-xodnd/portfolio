import React from 'react';
import logo from '../util/logo';
import './Skills.scss';

function Skills() {

  const Item = ({ name, src }) => (
    <figure className="skill-figure">
      <img className="skill-img" src={src} alt=""/>
      <figcaption>{ name }</figcaption>
    </figure>
  );

  const itemGrid = (items) => (
    Object.entries(items).map(
      ([ name, src ], idx) => <Item name={name} src={src} key={idx} />
    )
  );

  return (
    <div className="skill-grid">{ itemGrid(logo) }</div>
  );
}

export default Skills;