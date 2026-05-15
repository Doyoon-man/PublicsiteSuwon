import React, { useState } from 'react';
import './BoardSection.css';

function BoardSection({ renderBanner }) {
  const [activeTab, setActiveTab] = useState('홍보');

  const boards = [
    { type: '홍보', dept: '교통시설운영처', date: '2026-04-20', title: '노상거주자우선주차구획 지정주차제 안내' },
    { type: '홍보', dept: '가족여성회관', date: '2026-04-20', title: '2026년 재봉기(공업용) 사용 가능한 봉사자 모…' },
    { type: '홍보', dept: '주차·교통', date: '2026-04-20', title: '【 장안동 공영주차장 전면 폐쇄 안내 】' },
    { type: '채용', dept: '인사처', date: '2026-04-21', title: '상반기 신입사원 공개채용 공고' }
  ];

  return (
    <div className="board-grid-container">
      {/* 1. 좌측 상단: 검색창 + 알림·소식 */}
      <div className="grid-area-news">
        {/* 데스크탑 전용 검색창 */}
        <div className="search-bar-container">
          <label htmlFor="main-search" className="sr-only">검색어 입력</label>
          <div className="search-input-wrapper">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" id="main-search" className="search-input" placeholder="검색어를 입력해주세요" />
          </div>
        </div>

        <section className="board-section news-section" aria-labelledby="news-heading">
          <div className="section-header">
            <h2 id="news-heading" className="section-title">알림·소식</h2>
            <a href="#" className="more-link" aria-label="알림 소식 더보기">더보기 ⊕</a>
          </div>
          
          <div className="tab-list" role="tablist" aria-label="게시물 분류">
            <button 
              role="tab" 
              aria-selected={activeTab === '홍보'}
              aria-controls="panel-pr"
              id="tab-pr"
              className={`tab-btn ${activeTab === '홍보' ? 'active' : ''}`}
              onClick={() => setActiveTab('홍보')}
            >
              홍보
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === '채용'}
              aria-controls="panel-recruit"
              id="tab-recruit"
              className={`tab-btn ${activeTab === '채용' ? 'active' : ''}`}
              onClick={() => setActiveTab('채용')}
            >
              채용
            </button>
          </div>

          <div 
            id="panel-pr" 
            role="tabpanel" 
            aria-labelledby={activeTab === '홍보' ? 'tab-pr' : 'tab-recruit'}
            className="tab-panel"
          >
            <ul className="board-list">
              {boards.filter(b => b.type === activeTab).map((item, idx) => (
                <li key={idx} className="board-item">
                  <a href="#" className="board-link">
                    <div className="board-meta">
                      <span className="board-dept">{item.dept}</span>
                      <span className="board-date">{item.date}</span>
                    </div>
                    <strong className="board-title">{item.title}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* 2. 우측 상단: 데스크탑용 메인 배너 */}
      <div className="grid-area-banner banner-section">
        {renderBanner}
      </div>

      {/* 3. 좌측 하단: 알림판 */}
      <div className="grid-area-notice">
        <section className="board-section" aria-labelledby="notice-heading">
          <div className="section-header">
            <h2 id="notice-heading" className="section-title">알림판</h2>
            <a href="#" className="more-link" aria-label="알림판 더보기">더보기 ⊕</a>
          </div>
          <div className="image-card placeholder-bg">
            <p className="sr-only">에너지 절약 국민행동 - 이동할 때 5부제 참여 안내</p>
            <div aria-hidden="true" className="mock-image-content"></div>
          </div>
        </section>
      </div>

      {/* 4. 우측 하단: 보도자료 */}
      <div className="grid-area-press">
        <section className="board-section" aria-labelledby="press-heading">
          <div className="section-header">
            <h2 id="press-heading" className="section-title">보도자료</h2>
            <a href="#" className="more-link" aria-label="보도자료 더보기">더보기 ⊕</a>
          </div>
          <div className="image-card press-card">
            <div className="press-info">
              <strong className="press-title">안전이 최우선! 노사 안전동행 실천 선포</strong>
              <span className="press-date">2026-04-01</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BoardSection;
