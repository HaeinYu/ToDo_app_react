import React from 'react';
import styles from './WindowBtns.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

export default function WindowBtns() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.windowHeader}>
      <div className={styles.windowBtn}>
        <div className={styles.close}></div>
        <div className={styles.min}></div>
        <div className={styles.max}></div>
      </div>

      <div onClick={toggleDarkMode} className={styles.toggleBg}>
        <button
          onClick={toggleDarkMode}
          className={`${styles.toggle} ${
            darkMode ? styles.darkMode : styles.lightMode
          }`}
        ></button>
      </div>
    </header>
  );
}
