import React from 'react';
import './Footer.css';
import topdong from "./../assets/topdong.svg"
import development from "./../assets/development.svg"
import Sign from "./../assets/sign.svg"
import camp from "./../assets/camp.svg" 
import death from "./../assets/death.svg"
import trash from "./../assets/trash.svg"
import business from "./../assets/business.svg" 
import online from "./../assets/online.svg"
import city from "./../assets/city.svg"
import site from "./../assets/site.svg"

function Footer() {
  const menus = [
    { title: '탑동IV', icon: topdong },
    { title: '개발사업본부', icon: development },
    { title: '강좌수강신청', icon: Sign },     
    { title: '광교캠핑장', icon: camp },
    { title: '수원연화장', icon: death },
    { title: '종량제물품접수', icon: trash },
    { title: '사업현황', icon: business },
    { title: '온라인통합민원', icon: online },
    { title: '전국 도시 공사', icon: city },
    { title: '관련기관 사이트', icon: site }
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <nav className="footer-nav" aria-label="푸터 네비게이션">
        <ul className="footer-menu-grid">
          {menus.map((menu, idx) => (
            <li key={idx}>
              <a href="#" className="footer-link">
                <img src={menu.icon} className="footer-icon" aria-hidden="true" alt="바로가기" />
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="footer-info">
        <div className="policy-links">
          <a href="#">개인정보처리방침</a>
          <a href="#">공공데이터</a>
        </div>
        <address className="address">
          (우편번호) 수원시 권선구 수인로 ---. 수원도시공사 (---- --)
          <br/>
          TEL: 000-000-0000 / FAX: 000-000-0000
        </address>
        <p className="copyright">
          이 페이지는 포트폴리오 제작을 위해 만들어졌으며, 디자인에 들어가있는 이미지는 AI를 이용하여 만들어졌습니다.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
