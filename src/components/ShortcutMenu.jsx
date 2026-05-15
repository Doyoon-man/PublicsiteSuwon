import React from 'react';
import './ShortcutMenu.css';
import pen from "./../assets/pen.svg"
import heart from "./../assets/heart.svg"
import car from "./../assets/car.svg"
import ball from "./../assets/ball.svg"

function ShortcutMenu() {
  const shortcuts = [
    { title: '개발·사업', icon: pen },
    { title: '생활·복지', icon: heart },
    { title: '주차·교통', icon: car },
    { title: '문화·체육', icon: ball }
  ];

  return (
    <section className="shortcut-section" aria-labelledby="shortcut-heading">
      <h2 id="shortcut-heading" className="section-title">바로가기</h2>
      <div className="shortcut-grid" role="list">
        {shortcuts.map((item, index) => (
          <div key={index} role="listitem">
            <a href="#" className="shortcut-card" aria-label={`${item.title} 바로가기`}>
              <span className="shortcut-title">{item.title}</span>
              <img src={item.icon} className="shortcut-icon" aria-hidden="true" alt=" 바로가기" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShortcutMenu;
