import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "./../assets/logo.png";
import login from "./../assets/login.svg";
import hamburger from "./../assets/hamburger.svg";
import signup from "./../assets/signup.svg";

// 회원가입용 아이콘
const SignupIcon = () => (
  <img src={signup} alt="회원가입" />
);

const menuData = {
  '개발·사업': [
    { name: '도시개발사업', url: 'https://www.suwonudc.co.kr/swdevelop/PageLink.do?thirdMenuNo=&subMenuNo=010100&menuN=010000&link=forward:/PageContent.do&tempParam1=&' },
    { name: '주택건설사업', url: 'https://www.suwonudc.co.kr/swdevelop/PageLink.do?thirdMenuNo=&subMenuNo=010600&menuN=010000&link=forward:/PageContent.do&tempParam1=&' },
    { name: '도시정비사업', url: 'https://www.suwonudc.co.kr/swdevelop/PageLink.do?thirdMenuNo=&subMenuNo=010700&menuN=010000&link=forward:/PageContent.do&tempParam1=&' },
    { name: '위수탁개발사업', url: 'https://www.suwonudc.co.kr/swdevelop/PageLink.do?thirdMenuNo=&subMenuNo=010800&menuN=010000&link=forward:/PageContent.do&tempParam1=&' }
  ],
  '생활·복지': [
    { name: '수원시연화장', url: 'https://www.suwonudc.co.kr/suwonyhj/mainPage.do' },
    { name: '장기요양지원센터', url: 'https://www.suwonudc.co.kr/swjjc/base/main/view' },
    { name: '한아름콜센터', url: 'https://www.suwonudc.co.kr/swcall/mainPage.do' },
    { name: '수원시자원순환센터', url: 'https://www.suwonudc.co.kr/recycle/mainPage.do' }
  ],
  '주차·교통': [
    { name: '공영주차장', url: 'https://www.suwonudc.co.kr/park/mainPage.do' },
    { name: '거주자우선주차', url: 'https://www.suwonpark.co.kr/' },
    { name: '번호판제작소', url: 'https://www.suwonudc.co.kr/park/PageLink.do?link=forward:/PageContent.do&menuNo=040000&subMenuNo=040100&thirdMenuNo=' },
    { name: '환승센터', url: 'https://www.suwonudc.co.kr/swtraffic/PageLink.do?thirdMenuNo=080101&subMenuNo=080100&menuNo=080000&link=forward:/PageContent.do&tempParam1=&' }
  ],
  '문화·체육': [
    { name: '장안구민회관', url: 'https://www.suwonudc.co.kr/jacc/mainPage.do' },
    { name: '수원종합운동장', url: 'https://www.suwonudc.co.kr/suwonsc/mainPage.do' },
    { name: '서수원칠보체육관', url: 'https://www.suwonudc.co.kr/suwonsc2/mainPage.do' },
    { name: '광교웰빙국민체육센터', url: 'https://www.suwonudc.co.kr/suwonsc3/mainPage.do' },
    { name: '화산체육공원', url: 'https://www.suwonudc.co.kr/hwasanap/mainPage.do' },
    { name: '광교호수가족캠핑장', url: 'https://www.suwonudc.co.kr/ggcamping/mainPage.do' },
    { name: '가족여성회관', url: 'https://www.suwonudc.co.kr/sfwomen/mainPage.do' }
  ],
  '정보공개': [
    { name: '공공누리저작권', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '경영공시', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '계약정보공개', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '목적외 이용 제 3자 제공내역', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '업무정보공개', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '행정정보공개', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '사전정보공표목록', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' }
  ],
  '열린공간': [
    { name: '온라인통합민원', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '문의사항', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '자주묻는질문', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '칭찬합시다', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '고객모니터링요원', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' }
  ],
  '공사소개': [
    { name: '공사소개', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '인권경영', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '윤리경영', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '안전경영', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '적극행정코너', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '공사사회공헌', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '알림마당', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' },
    { name: '이용안내', url: 'https://doyoon-man.github.io/PublicsiteSuwon/#' }
  ]
};

function Header({ onLoginClick, onMenuClick }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Toggle off if clicked again
    } else {
      setActiveMenu(menu);
    }
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <header className="site-header" role="banner" onMouseLeave={closeMenu}>
      <div className="header-container">
        <h1 className="logo">
          <a href="https://doyoon-man.github.io/PublicsiteSuwon/#" aria-label="수원도시공사 홈으로 이동">
            <span aria-hidden="true" className="logo-icon"><img src={logo} alt="로고" /></span>
            수원도시공사
          </a>
        </h1>
        <nav className="header-nav" aria-label="메인 네비게이션">
          <ul>
            <li>
              <button className="nav-btn" aria-label="로그인" onClick={onLoginClick}>
                <span aria-hidden="true" className="icon"><img src={login} alt="로그인" /></span>
                <span className="btn-text">로그인</span>
              </button>
            </li>
            <li>
              <button className="nav-btn menu-btn" aria-label="전체 메뉴 열기" aria-expanded="false" onClick={onMenuClick}>
                <span aria-hidden="true" className="icon"><img src={hamburger} alt="메뉴" /></span>
                <span className="btn-text">메뉴</span>
              </button>
              <button className="nav-btn signup-btn" aria-label="회원가입" onClick={() => alert("아직 작업중")}>
                <span aria-hidden="true" className="icon"><SignupIcon /></span>
                <span className="btn-text">회원가입</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="desktop-gnb" aria-label="데스크탑 메인 네비게이션">
        <ul className="gnb-list">
          {Object.keys(menuData).map((menu) => (
            <li key={menu}>
              <button 
                className={`gnb-btn ${activeMenu === menu ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu)}
                aria-expanded={activeMenu === menu}
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>

        {activeMenu && (
          <div className="mega-menu">
            <div className="mega-menu-container">
              <h2 className="mega-menu-title">바로가기</h2>
              <div className="mega-menu-grid">
                {menuData[activeMenu].map((item, idx) => (
                  <button 
                    key={idx} 
                    className="mega-menu-item"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
