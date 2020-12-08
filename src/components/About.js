import React from 'react';
import './About.scss';

function About({ refAbout }) {


  return (
    <div className="about-wrap">
      <section ref={refAbout} className="about">
        <h1 className="section-title">
          <span>가슴은 뜨겁게, </span>
          <br/>
          <span>마음은 즐겁게</span>
        </h1>

        <p>
          열정적으로 개발에 몰입하고 <br/>
          즐겁게 새로운 기술과 트렌드를 학습하는 <br/>
          프론트엔드 개발자 박태웅입니다.
        </p>
        
        <p>
          항상 소통하는 자세로<br/>
          가독성과 확장성있는<br/>
          클린 코드를 작성하기 위해 노력합니다.
        </p>

      </section>
    </div>
  );
}

export default About;