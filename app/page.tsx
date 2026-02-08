import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Floating cartoon characters */}
      <div className={styles.cartoons}>
        <div className={`${styles.cartoon} ${styles.doraemon}`}>
          <svg viewBox="0 0 100 100" className={styles.cartoonSvg}>
            {/* Doraemon */}
            <ellipse cx="50" cy="55" rx="40" ry="38" fill="#00a0dc" />
            <ellipse cx="50" cy="52" rx="32" ry="30" fill="#fff" />
            <circle cx="42" cy="42" r="8" fill="#fff" />
            <circle cx="58" cy="42" r="8" fill="#fff" />
            <circle cx="44" cy="43" r="4" fill="#000" />
            <circle cx="60" cy="43" r="4" fill="#000" />
            <ellipse cx="50" cy="52" rx="6" ry="5" fill="#d84a38" />
            <line
              x1="50"
              y1="57"
              x2="50"
              y2="68"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M 30 60 Q 40 70 50 68"
              stroke="#000"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 70 60 Q 60 70 50 68"
              stroke="#000"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="50" cy="20" r="4" fill="#ffd700" />
            <rect x="46" y="85" width="8" height="10" rx="2" fill="#d84a38" />
          </svg>
        </div>

        <div className={`${styles.cartoon} ${styles.shinChan}`}>
          <svg viewBox="0 0 100 100" className={styles.cartoonSvg}>
            {/* Shin Chan */}
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#ffe4c4" />
            {/* Eyebrows */}
            <ellipse cx="35" cy="38" rx="12" ry="5" fill="#000" />
            <ellipse cx="65" cy="38" rx="12" ry="5" fill="#000" />
            {/* Eyes */}
            <ellipse cx="35" cy="50" rx="6" ry="8" fill="#000" />
            <ellipse cx="65" cy="50" rx="6" ry="8" fill="#000" />
            <circle cx="37" cy="48" r="2" fill="#fff" />
            <circle cx="67" cy="48" r="2" fill="#fff" />
            {/* Mouth */}
            <ellipse cx="50" cy="70" rx="10" ry="6" fill="#000" />
            <ellipse cx="50" cy="68" rx="7" ry="3" fill="#ff6b6b" />
            {/* Cheeks */}
            <ellipse
              cx="22"
              cy="58"
              rx="6"
              ry="4"
              fill="#ffb6c1"
              opacity="0.6"
            />
            <ellipse
              cx="78"
              cy="58"
              rx="6"
              ry="4"
              fill="#ffb6c1"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className={`${styles.cartoon} ${styles.doraemon2}`}>
          <svg viewBox="0 0 100 100" className={styles.cartoonSvg}>
            {/* Doraemon copy */}
            <ellipse cx="50" cy="55" rx="40" ry="38" fill="#00a0dc" />
            <ellipse cx="50" cy="52" rx="32" ry="30" fill="#fff" />
            <circle cx="42" cy="42" r="8" fill="#fff" />
            <circle cx="58" cy="42" r="8" fill="#fff" />
            <circle cx="44" cy="43" r="4" fill="#000" />
            <circle cx="60" cy="43" r="4" fill="#000" />
            <ellipse cx="50" cy="52" rx="6" ry="5" fill="#d84a38" />
            <line
              x1="50"
              y1="57"
              x2="50"
              y2="68"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M 30 60 Q 40 70 50 68"
              stroke="#000"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 70 60 Q 60 70 50 68"
              stroke="#000"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="50" cy="20" r="4" fill="#ffd700" />
            <rect x="46" y="85" width="8" height="10" rx="2" fill="#d84a38" />
          </svg>
        </div>

        <div className={`${styles.cartoon} ${styles.shinChan2}`}>
          <svg viewBox="0 0 100 100" className={styles.cartoonSvg}>
            {/* Shin Chan copy */}
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="#ffe4c4" />
            <ellipse cx="35" cy="38" rx="12" ry="5" fill="#000" />
            <ellipse cx="65" cy="38" rx="12" ry="5" fill="#000" />
            <ellipse cx="35" cy="50" rx="6" ry="8" fill="#000" />
            <ellipse cx="65" cy="50" rx="6" ry="8" fill="#000" />
            <circle cx="37" cy="48" r="2" fill="#fff" />
            <circle cx="67" cy="48" r="2" fill="#fff" />
            <ellipse cx="50" cy="70" rx="10" ry="6" fill="#000" />
            <ellipse cx="50" cy="68" rx="7" ry="3" fill="#ff6b6b" />
            <ellipse
              cx="22"
              cy="58"
              rx="6"
              ry="4"
              fill="#ffb6c1"
              opacity="0.6"
            />
            <ellipse
              cx="78"
              cy="58"
              rx="6"
              ry="4"
              fill="#ffb6c1"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Nicholas Riykco</h1>
        <p className={styles.message}>
          WIP. Sorry about that. Website currently under construction
          (redesign)... 🛻 👷
        </p>

        <div className={styles.loadingContainer}>
          <div className={styles.loadingSegments}>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={styles.segment}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

        <p className={styles.status}>Work in progress</p>

        <Link href="/experience" className={styles.button}>
          View Experience →
        </Link>
      </div>

      <footer className={styles.footer}>© 2026 Nicholas Riykco</footer>
    </main>
  );
}
