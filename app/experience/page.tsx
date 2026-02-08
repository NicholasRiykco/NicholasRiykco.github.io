import { experiences } from '@/data/experiences';
import { ExperienceList } from '@/components/ExperienceList';
import styles from './page.module.css';

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.prompt}>~/</span>experience
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.comment}>// professional history</span>
        </p>
      </header>
      <section className={styles.content}>
        <ExperienceList experiences={experiences} />
      </section>
    </main>
  );
}
