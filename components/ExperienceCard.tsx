import { useMemo } from 'react';
import type { Experience } from '@/data/experiences';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
  isHighlighted?: boolean;
  highlightTerms?: string[];
}

// Highlight matching terms in text
function highlightText(text: string, terms: string[]): React.ReactNode {
  if (!terms.length) return text;

  // Create a regex pattern that matches any of the terms (case insensitive)
  const pattern = new RegExp(
    `(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isMatch = terms.some(term => part.toLowerCase() === term.toLowerCase());
    if (isMatch) {
      return (
        <mark key={index} className={styles.highlight}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

export function ExperienceCard({ experience, isHighlighted, highlightTerms = [] }: ExperienceCardProps) {
  const highlightedBullets = useMemo(() => {
    return experience.bullets.map((bullet, index) => (
      <li key={index} className={styles.bullet}>
        <span className={styles.bulletMarker}>$</span>
        {highlightText(bullet, highlightTerms)}
      </li>
    ));
  }, [experience.bullets, highlightTerms]);

  return (
    <article
      id={experience.id}
      className={`${styles.card} ${isHighlighted ? styles.highlighted : ''}`}
    >
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h2 className={styles.role}>{experience.role}</h2>
          <span className={styles.dates}>
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
        <div className={styles.companyRow}>
          <span className={styles.company}>{experience.company}</span>
          {experience.team && (
            <span className={styles.team}>{experience.team}</span>
          )}
          {experience.location && (
            <span className={styles.location}>{experience.location}</span>
          )}
        </div>
      </header>

      <ul className={styles.bullets}>
        {highlightedBullets}
      </ul>

      <footer className={styles.footer}>
        <div className={styles.technologies}>
          {experience.technologies.map(tech => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
