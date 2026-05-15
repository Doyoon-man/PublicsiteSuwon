import React, { useState, useCallback, useEffect, useRef } from 'react';
import './MainBanner.css';
import banner1 from '../assets/headerimage.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const slides = [
  { image: banner1, alt: '수원도시공사 메인 배너 1' },
  { image: banner2, alt: '수원도시공사 메인 배너 2' },
  { image: banner3, alt: '수원도시공사 메인 배너 3' },
];

const AUTO_PLAY_INTERVAL = 6000; // 6초

function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  // 자동 재생 타이머 관리
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(goNext, AUTO_PLAY_INTERVAL);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, goNext]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return (
    <section className="main-banner" aria-labelledby="banner-heading">
      {/* 슬라이드 트랙: 모든 이미지를 가로로 나란히 배치 후 translateX로 이동 */}
      <div className="banner-track-wrapper">
        <div
          className="banner-track"
          style={{ transform: `translateX(-${currentIndex * (100 / slides.length)}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="banner-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.alt}
              aria-hidden={idx !== currentIndex}
            />
          ))}
        </div>
      </div>

      <div className="banner-controls" aria-label="배너 슬라이드 조작">
        <span className="slide-counter" aria-live="polite">{currentIndex + 1}/{slides.length}</span>
        <button className="control-btn prev" aria-label="이전 슬라이드" onClick={goPrev}>&lt;</button>
        <button
          className="control-btn play"
          aria-label={isPlaying ? '자동 재생 정지' : '자동 재생 시작'}
          onClick={togglePlay}
        >
          {isPlaying ? (
            /* 일시정지 아이콘 */
            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="4" height="12" rx="1" fill="currentColor"/>
              <rect x="9" y="1" width="4" height="12" rx="1" fill="currentColor"/>
            </svg>
          ) : (
            /* 재생 아이콘 */
            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 1.5L12.5 7L2 12.5V1.5Z" fill="currentColor"/>
            </svg>
          )}
        </button>
        <button className="control-btn next" aria-label="다음 슬라이드" onClick={goNext}>&gt;</button>
      </div>
    </section>
  );
}

export default MainBanner;
