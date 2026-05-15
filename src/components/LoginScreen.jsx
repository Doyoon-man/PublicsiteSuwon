import React from 'react';
import './LoginScreen.css';
import logo from '../assets/logo.png';

function LoginScreen({ onClose }) {
  const authMethods = [
    { 
      id: 'mobile_id', 
      name: '모바일 신분증', 
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <circle cx="8" cy="10" r="2" fill="white" />
          <path d="M8 13c-2 0-3.5 1-3.5 2.5v0.5h7V15.5C11.5 14 10 13 8 13z" fill="white" />
          <rect x="14" y="9" width="5" height="1.5" fill="white" />
          <rect x="14" y="12" width="3" height="1.5" fill="white" />
        </svg>
      ) 
    },
    { 
      id: 'simple_auth', 
      name: '간편인증', 
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <line x1="7.5" y1="7.5" x2="16.5" y2="16.5" />
          <line x1="16.5" y1="7.5" x2="7.5" y2="16.5" />
        </svg>
      ) 
    },
    { 
      id: 'finance_cert', 
      name: '금융인증서', 
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="12" y2="12" />
          <circle cx="15" cy="14" r="2" />
          <path d="M14 15.5l-1 4 2-1 2 1 -1-4" />
        </svg>
      ) 
    },
    { 
      id: 'common_cert', 
      name: '공동인증서', 
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
      ) 
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 
    alert('로그인 성공!');
    onClose();
  };

  return (
    <div className="login-screen-overlay" role="dialog" aria-labelledby="login-title" aria-modal="true">
      <div className="login-screen-container">
        
        <header className="ls-header">
          <div className="ls-header-left">
            <img src={logo} alt="수원도시공사 로고" className="ls-logo" />
            <h1 className="ls-company-name">수원도시공사</h1>
          </div>
          <button className="ls-close-btn" onClick={onClose} aria-label="닫기">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <h2 id="login-title" className="ls-section-title">로그인</h2>

        <div className="ls-desktop-top-row">

        <div className="ls-login-box">
          <span className="ls-login-label">LOGIN</span>
          
          <form onSubmit={handleLogin}>
            <div className="ls-input-group">
              <div className="ls-inputs">
                <div className="ls-input-field">
                  <label className="ls-input-label">아이디</label>
                  <input 
                    type="text" 
                    className="ls-input" 
                    placeholder="아이디를 입력하세요." 
                    aria-label="아이디 입력"
                    required
                  />
                </div>
                <div className="ls-input-field">
                  <label className="ls-input-label">비밀번호</label>
                  <input 
                    type="password" 
                    className="ls-input" 
                    placeholder="비밀번호를 입력하세요." 
                    aria-label="비밀번호 입력"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="ls-login-btn">로그인</button>
            </div>

            <div className="ls-options">
              <label className="ls-checkbox-label">
                <input type="checkbox" className="ls-checkbox" />
                아이디 저장
              </label>
              <label className="ls-toggle-label">
                키보드 보안 사용
                <input type="checkbox" className="ls-toggle" defaultChecked />
              </label>
            </div>
          </form>
        </div>

        <div className="ls-recovery-box">
          <div className="ls-info-block">
            <h3 className="ls-info-question">수원도시공사의 회원이 아니신가요?</h3>
            <p className="ls-info-desc">통합회원으로 가입하시고 다양한 콘텐츠를 편리하게 이용하세요.</p>
            <button className="ls-primary-inline-btn">통합회원가입</button>
          </div>
          
          <div className="ls-info-block">
            <h3 className="ls-info-question">아이디나 비밀번호를 분실하셨나요?</h3>
            <p className="ls-info-desc">정확한 회원관리 서비스로 원하시는 정보를 찾아드립니다.</p>
            <button className="ls-primary-inline-btn">아이디/비밀번호찾기</button>
          </div>
        </div>
        </div>

        <div className="ls-unified-box">
          <h3 className="ls-unified-title">통합 로그인</h3>
          <div className="ls-auth-grid">
            {authMethods.map((method) => (
              <button key={method.id} className="ls-auth-btn" aria-label={`${method.name}으로 로그인`}>
                <div className="ls-auth-icon" aria-hidden="true">
                  {method.icon}
                </div>
                <span className="ls-auth-text">{method.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="ls-promo-box">
          <img src="/promo_banner.png" alt="수원도시공사 시민과 함께하는 아름다운 공기업" className="ls-promo-banner" />
        </div>
        
      </div>
    </div>
  );
}

export default LoginScreen;
