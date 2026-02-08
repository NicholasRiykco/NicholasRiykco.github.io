'use client';

import { useCallback, useMemo, useRef, useState, useTransition } from 'react';
import type { Experience } from '@/data/experiences';
import { searchExperiences, SearchResult, extractKeywords, expandWithSynonyms } from '@/lib/search';
import { ExperienceCard } from './ExperienceCard';
import { SearchBar } from './SearchBar';
import styles from './ExperienceList.module.css';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [, startTransition] = useTransition();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToExperience = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      setSearchQuery(query);

      if (!query.trim()) {
        setHighlightedId(null);
        setSearchResults([]);
        setSelectedIndex(0);
        return;
      }

      debounceRef.current = setTimeout(() => {
        startTransition(() => {
          const results = searchExperiences(experiences, query);
          setSearchResults(results);
          setSelectedIndex(0);

          if (results.length > 0) {
            const firstResult = results[0];
            setHighlightedId(firstResult.experience.id);
            scrollToExperience(firstResult.experience.id);
          } else {
            setHighlightedId(null);
          }
        });
      }, 200);
    },
    [experiences, scrollToExperience]
  );

  const handleNavigate = useCallback(
    (direction: 'up' | 'down') => {
      if (searchResults.length === 0) return;

      let newIndex = selectedIndex;
      if (direction === 'down') {
        newIndex = (selectedIndex + 1) % searchResults.length;
      } else {
        newIndex = selectedIndex === 0 ? searchResults.length - 1 : selectedIndex - 1;
      }

      setSelectedIndex(newIndex);
      const result = searchResults[newIndex];
      setHighlightedId(result.experience.id);
      scrollToExperience(result.experience.id);
    },
    [searchResults, selectedIndex, scrollToExperience]
  );

  // Extract keywords for highlighting (expanded with synonyms)
  const highlightTerms = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const keywords = extractKeywords(searchQuery);
    return expandWithSynonyms(keywords);
  }, [searchQuery]);

  const experienceCards = useMemo(
    () =>
      experiences.map(exp => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          isHighlighted={highlightedId === exp.id}
          highlightTerms={highlightedId === exp.id ? highlightTerms : []}
        />
      )),
    [experiences, highlightedId, highlightTerms]
  );

  return (
    <div className={styles.container}>
      <div className={styles.list}>{experienceCards}</div>
      <SearchBar
        onSearch={handleSearch}
        onNavigate={handleNavigate}
        resultCount={searchResults.length}
        currentIndex={selectedIndex}
      />
    </div>
  );
}
