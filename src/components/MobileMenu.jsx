import React, { useState, useEffect } from 'react';
import './MobileMenu.css';

const menuData = [
  {
    category: '정보공개',
    items: ['경영공시', '행정정보공개', '사전정보공표목록', '계약정보공개', '업무정보공개', '공공누리저작권', '목적외 이용 제 3자 제공내역']
  },
  {
    category: '열린공간',
    items: ['온라인 통합 민원', '문의사항', '자주찾는질문', '칭찬합시다', '고객모니터링요원', '시민참여예산안내']
  },
  {
    category: '공사소개',
    items: ['인권경영', '윤리경영', '안전경영', '적극행정코너', '공사사회공헌', '알림마당', '이용안내']
  }
];

function MobileMenu({ onClose, onLoginClick }) {
  const [activeCategory, setActiveCategory] = useState('정보공개');

  // 모바일 메뉴가 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const activeItems = menuData.find(menu => menu.category === activeCategory)?.items || [];

  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="모바일 전체 메뉴">
      <div className="mobile-menu-container">
        <header className="mobile-menu-header">
          <div className="mobile-header-left">
            <span className="mobile-logo-text">수원도시공사</span>
          </div>
          <div className="mobile-header-right">
            <button className="mobile-login-btn" onClick={() => { onClose(); if(onLoginClick) onLoginClick(); }} aria-label="로그인">
              로그인
            </button>
            <button className="mobile-close-btn" onClick={onClose} aria-label="메뉴 닫기">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </header>
        
        <div className="mobile-menu-body">
          <nav className="mobile-category-list" aria-label="메인 카테고리">
            <ul>
              {menuData.map((menu) => (
                <li key={menu.category}>
                  <button 
                    className={`category-btn ${activeCategory === menu.category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(menu.category)}
                    aria-pressed={activeCategory === menu.category}
                  >
                    {menu.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mobile-subcategory-list" aria-label={`${activeCategory} 하위 메뉴`}>
            <div className="subcategory-header">
              <h2>{activeCategory}</h2>
            </div>
            <ul>
              {activeItems.map((item, index) => (
                <li key={index}>
                  <a href={`#${item}`} className="subcategory-link" onClick={onClose}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
