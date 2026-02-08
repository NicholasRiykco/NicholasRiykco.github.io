'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onNavigate: (direction: 'up' | 'down') => void;
  resultCount: number;
  currentIndex: number;
}

export function SearchBar({ onSearch, onNavigate, resultCount, currentIndex }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus on Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }

      // Blur on Escape
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        e.preventDefault();
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        onNavigate('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        onNavigate('up');
      }
    },
    [onNavigate]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onSearch(newValue);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setValue('');
    onSearch('');
    inputRef.current?.focus();
  }, [onSearch]);

  const placeholders = [
    'golang backend experience',
    'react frontend',
    'kubernetes',
    'telstra',
    'senior engineer',
    'microservices api',
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(i => (i + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const noResults = value.trim() && resultCount === 0;
  const hasResults = value.trim() && resultCount > 0;

  return (
    <div className={`${styles.container} ${isFocused ? styles.focused : ''}`}>
      <div className={styles.bar}>
        <span className={styles.prompt}>{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholders[placeholderIndex]}
          className={styles.input}
          aria-label="Search experiences"
          spellCheck={false}
          autoComplete="off"
        />
        {hasResults && (
          <div className={styles.resultNav}>
            <button
              onClick={() => onNavigate('up')}
              className={styles.navBtn}
              aria-label="Previous result"
              type="button"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" className={styles.navIcon}>
                <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
            <span className={styles.resultCount}>
              {currentIndex + 1}/{resultCount}
            </span>
            <button
              onClick={() => onNavigate('down')}
              className={styles.navBtn}
              aria-label="Next result"
              type="button"
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" className={styles.navIcon}>
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        )}
        {value && (
          <button
            onClick={handleClear}
            className={styles.clearBtn}
            aria-label="Clear search"
            type="button"
          >
            x
          </button>
        )}
        <div className={styles.shortcut}>
          <kbd className={styles.kbd}>{isMac ? '\u2318' : 'Ctrl'}</kbd>
          <kbd className={styles.kbd}>K</kbd>
        </div>
      </div>
      {noResults && (
        <div className={styles.noResults}>
          <span className={styles.noResultsText}>
            No matching experience found for &quot;{value}&quot;
          </span>
        </div>
      )}
      {hasResults && isFocused && (
        <div className={styles.hint}>
          <span>Use</span>
          <kbd className={styles.hintKbd}>↑</kbd>
          <kbd className={styles.hintKbd}>↓</kbd>
          <span>to navigate</span>
        </div>
      )}
    </div>
  );
}
