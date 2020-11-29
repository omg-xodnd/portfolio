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

  return (
    <div className="section-wrap">
      <div className="section-title">ABOUT</div>
      <section className="profile">
        <Name />
        <Greeting />
      </section>
    </div>
  );
}

export default Profile;