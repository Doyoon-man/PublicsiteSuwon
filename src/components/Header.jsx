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
  '개발·사업': ['도시개발사업', '주택건설사업', '도시정비사업', '위수탁개발사업'],
  '생활·복지': ['수원시연화장', '장기요양지원센터', '한아름콜센터', '수원시자원순환센터'],
  '주차·교통': ['공영주차장', '거주자우선주차', '번호판제작소', '환승센터'],
  '문화·체육': ['장안구민회관', '수원종합운동장', '서수원칠보체육관', '광교웰빙국민체육센터', '화산체육공원', '광교호수가족캠핑장', '가족여성회관', '환승센터'],
  '정보공개': ['공공누리저작권', '경영공시', '계약정보공개', '목적외 이용 제 3자 제공내역', '업무정보공개', '행정정보공개', '사전정보공표목록'],
  '열린공간': ['온라인통합민원', '문의사항', '자주묻는질문', '칭찬합시다', '고객모니터링요원'],
  '공사소개': ['공사소개', '인권경영', '윤리경영', '안전경영', '적극행정코너', '공사사회공헌', '알림마당', '이용안내']
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
          <a to="https://doyoon-man.github.io/PublicsiteSuwon/#" aria-label="수원도시공사 홈으로 이동">
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
              <button className="nav-btn signup-btn" aria-label="회원가입">
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
                  <button key={idx} className="mega-menu-item">
                    {item}
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
