'use client';

import { useMemo } from 'react';
import styles from './FloatingStickers.module.css';

// Cute anime-style SVG stickers
function ChibiCat() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <ellipse cx="50" cy="60" rx="35" ry="30" fill="#ffb6c1" />
      <ellipse cx="50" cy="55" rx="30" ry="25" fill="#fff" />
      <polygon points="20,35 30,55 15,55" fill="#ffb6c1" />
      <polygon points="80,35 70,55 85,55" fill="#ffb6c1" />
      <polygon points="22,38 28,52 18,52" fill="#ffc0cb" />
      <polygon points="78,38 72,52 82,52" fill="#ffc0cb" />
      <ellipse cx="38" cy="55" rx="8" ry="10" fill="#000" />
      <ellipse cx="62" cy="55" rx="8" ry="10" fill="#000" />
      <circle cx="40" cy="52" r="3" fill="#fff" />
      <circle cx="64" cy="52" r="3" fill="#fff" />
      <ellipse cx="50" cy="65" rx="4" ry="3" fill="#ffb6c1" />
      <path d="M 46 68 Q 50 73 54 68" stroke="#000" strokeWidth="2" fill="none" />
      <ellipse cx="25" cy="60" rx="8" ry="5" fill="#ff9999" opacity="0.5" />
      <ellipse cx="75" cy="60" rx="8" ry="5" fill="#ff9999" opacity="0.5" />
    </svg>
  );
}

function ChibiDog() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <ellipse cx="50" cy="58" rx="32" ry="30" fill="#deb887" />
      <ellipse cx="50" cy="55" rx="28" ry="25" fill="#fff8dc" />
      <ellipse cx="25" cy="40" rx="15" ry="20" fill="#deb887" />
      <ellipse cx="75" cy="40" rx="15" ry="20" fill="#deb887" />
      <ellipse cx="38" cy="52" rx="6" ry="8" fill="#000" />
      <ellipse cx="62" cy="52" rx="6" ry="8" fill="#000" />
      <circle cx="40" cy="50" r="2" fill="#fff" />
      <circle cx="64" cy="50" r="2" fill="#fff" />
      <ellipse cx="50" cy="62" rx="6" ry="5" fill="#000" />
      <path d="M 44 70 Q 50 76 56 70" stroke="#000" strokeWidth="2" fill="none" />
      <ellipse cx="28" cy="58" rx="6" ry="4" fill="#ffb6c1" opacity="0.6" />
      <ellipse cx="72" cy="58" rx="6" ry="4" fill="#ffb6c1" opacity="0.6" />
    </svg>
  );
}

function ChibiBunny() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <ellipse cx="35" cy="25" rx="10" ry="25" fill="#fff" stroke="#ffb6c1" strokeWidth="2" />
      <ellipse cx="65" cy="25" rx="10" ry="25" fill="#fff" stroke="#ffb6c1" strokeWidth="2" />
      <ellipse cx="35" cy="25" rx="5" ry="18" fill="#ffb6c1" opacity="0.5" />
      <ellipse cx="65" cy="25" rx="5" ry="18" fill="#ffb6c1" opacity="0.5" />
      <ellipse cx="50" cy="62" rx="30" ry="28" fill="#fff" stroke="#ffb6c1" strokeWidth="2" />
      <ellipse cx="40" cy="58" rx="5" ry="7" fill="#000" />
      <ellipse cx="60" cy="58" rx="5" ry="7" fill="#000" />
      <circle cx="42" cy="56" r="2" fill="#fff" />
      <circle cx="62" cy="56" r="2" fill="#fff" />
      <ellipse cx="50" cy="68" rx="4" ry="3" fill="#ffb6c1" />
      <ellipse cx="30" cy="65" rx="8" ry="5" fill="#ffb6c1" opacity="0.4" />
      <ellipse cx="70" cy="65" rx="8" ry="5" fill="#ffb6c1" opacity="0.4" />
    </svg>
  );
}

function AnimeStar() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#ffd700"
        stroke="#ffb700"
        strokeWidth="2"
      />
      <polygon
        points="50,20 56,40 75,40 60,52 66,72 50,60 34,72 40,52 25,40 44,40"
        fill="#fff5cc"
        opacity="0.6"
      />
      <ellipse cx="40" cy="42" rx="4" ry="5" fill="#000" />
      <ellipse cx="60" cy="42" rx="4" ry="5" fill="#000" />
      <circle cx="41" cy="41" r="1.5" fill="#fff" />
      <circle cx="61" cy="41" r="1.5" fill="#fff" />
      <path d="M 45 52 Q 50 56 55 52" stroke="#ff6b6b" strokeWidth="2" fill="none" />
      <ellipse cx="35" cy="48" rx="5" ry="3" fill="#ffb6c1" opacity="0.5" />
      <ellipse cx="65" cy="48" rx="5" ry="3" fill="#ffb6c1" opacity="0.5" />
    </svg>
  );
}

function AnimeHeart() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <path
        d="M 50 88 C 20 60 5 40 20 25 C 35 10 50 25 50 35 C 50 25 65 10 80 25 C 95 40 80 60 50 88"
        fill="#ff6b8a"
        stroke="#ff4d6d"
        strokeWidth="2"
      />
      <path
        d="M 50 75 C 30 55 20 42 30 32 C 38 24 48 32 50 38"
        fill="#ffb3c1"
        opacity="0.5"
      />
      <ellipse cx="38" cy="42" rx="4" ry="5" fill="#000" />
      <ellipse cx="58" cy="42" rx="4" ry="5" fill="#000" />
      <circle cx="39" cy="41" r="1.5" fill="#fff" />
      <circle cx="59" cy="41" r="1.5" fill="#fff" />
      <path d="M 44 55 Q 48 60 52 55" stroke="#d62839" strokeWidth="2" fill="none" />
    </svg>
  );
}

function AnimeCloud() {
  return (
    <svg viewBox="0 0 120 80" className={styles.svg}>
      <ellipse cx="60" cy="50" rx="45" ry="25" fill="#fff" stroke="#87ceeb" strokeWidth="2" />
      <circle cx="30" cy="45" r="20" fill="#fff" stroke="#87ceeb" strokeWidth="2" />
      <circle cx="90" cy="45" r="18" fill="#fff" stroke="#87ceeb" strokeWidth="2" />
      <circle cx="50" cy="35" r="18" fill="#fff" />
      <circle cx="75" cy="35" r="15" fill="#fff" />
      <ellipse cx="45" cy="50" rx="4" ry="5" fill="#000" />
      <ellipse cx="75" cy="50" rx="4" ry="5" fill="#000" />
      <circle cx="46" cy="49" r="1.5" fill="#fff" />
      <circle cx="76" cy="49" r="1.5" fill="#fff" />
      <path d="M 55 58 Q 60 62 65 58" stroke="#87ceeb" strokeWidth="2" fill="none" />
      <ellipse cx="35" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.4" />
      <ellipse cx="85" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.4" />
    </svg>
  );
}

function AnimeFlower() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="30"
          rx="15"
          ry="22"
          fill="#ffb7c5"
          stroke="#ff91a4"
          strokeWidth="1"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="18" fill="#fff59d" stroke="#ffd54f" strokeWidth="2" />
      <ellipse cx="44" cy="48" rx="3" ry="4" fill="#000" />
      <ellipse cx="56" cy="48" rx="3" ry="4" fill="#000" />
      <circle cx="45" cy="47" r="1" fill="#fff" />
      <circle cx="57" cy="47" r="1" fill="#fff" />
      <path d="M 47 55 Q 50 58 53 55" stroke="#ff6b6b" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ChibiOnigiri() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <polygon points="50,10 90,85 10,85" fill="#fff" stroke="#333" strokeWidth="2" rx="10" />
      <rect x="30" y="60" width="40" height="25" fill="#1a1a1a" rx="3" />
      <ellipse cx="38" cy="45" rx="5" ry="6" fill="#000" />
      <ellipse cx="62" cy="45" rx="5" ry="6" fill="#000" />
      <circle cx="40" cy="44" r="2" fill="#fff" />
      <circle cx="64" cy="44" r="2" fill="#fff" />
      <path d="M 46 55 Q 50 60 54 55" stroke="#ff6b6b" strokeWidth="2" fill="none" />
      <ellipse cx="28" cy="50" rx="6" ry="4" fill="#ffb6c1" opacity="0.5" />
      <ellipse cx="72" cy="50" rx="6" ry="4" fill="#ffb6c1" opacity="0.5" />
    </svg>
  );
}

function ChibiMochi() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <ellipse cx="50" cy="60" rx="40" ry="30" fill="#fce4ec" stroke="#f8bbd9" strokeWidth="2" />
      <ellipse cx="50" cy="55" rx="35" ry="25" fill="#fff" opacity="0.5" />
      <ellipse cx="40" cy="55" rx="5" ry="6" fill="#000" />
      <ellipse cx="60" cy="55" rx="5" ry="6" fill="#000" />
      <circle cx="42" cy="54" r="2" fill="#fff" />
      <circle cx="62" cy="54" r="2" fill="#fff" />
      <path d="M 46 68 Q 50 72 54 68" stroke="#e91e63" strokeWidth="2" fill="none" />
      <ellipse cx="30" cy="62" rx="8" ry="5" fill="#f8bbd9" opacity="0.6" />
      <ellipse cx="70" cy="62" rx="8" ry="5" fill="#f8bbd9" opacity="0.6" />
    </svg>
  );
}

function ChibiGhost() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <path
        d="M 20 55 Q 20 20 50 20 Q 80 20 80 55 L 80 85 Q 72 75 65 85 Q 57 75 50 85 Q 42 75 35 85 Q 27 75 20 85 Z"
        fill="#fff"
        stroke="#ddd"
        strokeWidth="2"
      />
      <ellipse cx="38" cy="50" rx="6" ry="8" fill="#000" />
      <ellipse cx="62" cy="50" rx="6" ry="8" fill="#000" />
      <circle cx="40" cy="48" r="2" fill="#fff" />
      <circle cx="64" cy="48" r="2" fill="#fff" />
      <ellipse cx="50" cy="65" rx="6" ry="4" fill="#ffb6c1" />
      <ellipse cx="28" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.4" />
      <ellipse cx="72" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.4" />
    </svg>
  );
}

function Sparkle() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <path
        d="M 50 5 L 55 40 L 95 50 L 55 60 L 50 95 L 45 60 L 5 50 L 45 40 Z"
        fill="#ffd700"
        stroke="#ffb700"
        strokeWidth="1"
      />
      <path
        d="M 50 20 L 53 45 L 80 50 L 53 55 L 50 80 L 47 55 L 20 50 L 47 45 Z"
        fill="#fff8dc"
        opacity="0.7"
      />
    </svg>
  );
}

function TinyDoraemon() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <ellipse cx="50" cy="55" rx="38" ry="36" fill="#00a0dc" />
      <ellipse cx="50" cy="52" rx="30" ry="28" fill="#fff" />
      <circle cx="42" cy="42" r="7" fill="#fff" />
      <circle cx="58" cy="42" r="7" fill="#fff" />
      <circle cx="44" cy="43" r="4" fill="#000" />
      <circle cx="60" cy="43" r="4" fill="#000" />
      <circle cx="45" cy="42" r="1.5" fill="#fff" />
      <circle cx="61" cy="42" r="1.5" fill="#fff" />
      <ellipse cx="50" cy="52" rx="5" ry="4" fill="#d84a38" />
      <line x1="50" y1="56" x2="50" y2="65" stroke="#000" strokeWidth="1.5" />
      <path d="M 35 58 Q 42 66 50 65" stroke="#000" strokeWidth="1" fill="none" />
      <path d="M 65 58 Q 58 66 50 65" stroke="#000" strokeWidth="1" fill="none" />
      <line x1="20" y1="50" x2="32" y2="52" stroke="#000" strokeWidth="1" />
      <line x1="20" y1="55" x2="32" y2="55" stroke="#000" strokeWidth="1" />
      <line x1="20" y1="60" x2="32" y2="58" stroke="#000" strokeWidth="1" />
      <line x1="80" y1="50" x2="68" y2="52" stroke="#000" strokeWidth="1" />
      <line x1="80" y1="55" x2="68" y2="55" stroke="#000" strokeWidth="1" />
      <line x1="80" y1="60" x2="68" y2="58" stroke="#000" strokeWidth="1" />
      <circle cx="50" cy="18" r="4" fill="#ffd700" />
    </svg>
  );
}

function TinyShinChan() {
  return (
    <svg viewBox="0 0 100 100" className={styles.svg}>
      <ellipse cx="50" cy="55" rx="32" ry="38" fill="#ffe4c4" />
      <ellipse cx="35" cy="42" rx="11" ry="4" fill="#000" />
      <ellipse cx="65" cy="42" rx="11" ry="4" fill="#000" />
      <ellipse cx="35" cy="54" rx="5" ry="7" fill="#000" />
      <ellipse cx="65" cy="54" rx="5" ry="7" fill="#000" />
      <circle cx="37" cy="52" r="2" fill="#fff" />
      <circle cx="67" cy="52" r="2" fill="#fff" />
      <ellipse cx="50" cy="72" rx="8" ry="5" fill="#000" />
      <ellipse cx="50" cy="70" rx="5" ry="2.5" fill="#ff6b6b" />
      <ellipse cx="24" cy="60" rx="5" ry="3" fill="#ffb6c1" opacity="0.6" />
      <ellipse cx="76" cy="60" rx="5" ry="3" fill="#ffb6c1" opacity="0.6" />
    </svg>
  );
}

const stickerComponents = [
  ChibiCat,
  ChibiDog,
  ChibiBunny,
  AnimeStar,
  AnimeHeart,
  AnimeCloud,
  AnimeFlower,
  ChibiOnigiri,
  ChibiMochi,
  ChibiGhost,
  Sparkle,
  TinyDoraemon,
  TinyShinChan,
  ChibiCat,
  AnimeHeart,
  Sparkle,
  TinyDoraemon,
  AnimeFlower,
  ChibiBunny,
  TinyShinChan,
];

export function FloatingStickers() {
  const stickerElements = useMemo(() => {
    return stickerComponents.map((StickerComponent, index) => {
      const row = Math.floor(index / 4);
      const col = index % 4;
      const top = 5 + row * 18 + Math.random() * 8;
      const startX = -15 + col * 30 + Math.random() * 10;
      const duration = 18 + Math.random() * 15;
      const delay = Math.random() * -25;
      const size = 50 + Math.random() * 30;

      return (
        <div
          key={index}
          className={styles.sticker}
          style={{
            top: `${top}%`,
            left: `${startX}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <StickerComponent />
        </div>
      );
    });
  }, []);

  return <div className={styles.container}>{stickerElements}</div>;
}
