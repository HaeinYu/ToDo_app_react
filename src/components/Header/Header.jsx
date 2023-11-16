import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Todo Flight</h1>
        <h2>Turning Plans into Realisty</h2>
      </div>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
