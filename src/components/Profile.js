import React from 'react';
import './Profile.scss';

function Profile() {

  const info = {
    nameKr: '박태웅',
    nameEn: 'TAEWOONG PARK',
    phone: '',
    email: 'taewoong_park@naver.com',
  }

  // components
  function Name() {
    return (
      <div className="name-wrap">
        <div className="name-kr">{ info.nameKr }</div>
        <div className="name-en">{ info.nameEn }</div>
      </div>
    );
  }

  function Greeting() {
    return (
      <p className="greeting">
        안녕하세요, 프론트엔드 개발자 박태웅입니다.
      </p>
    )
  }
  
  function Skills() {
    return (
      <article>
        <h2>Skills</h2>
        html5 CSS3 JS ES6 Vue React Redux SASS
        Python Django
      </article>
    );
  }

  return (
    <section className="profile">
      <h1 className="section-title">About</h1>
      <Name />
      <Greeting />
    </section>
  );
}

export default Profile;