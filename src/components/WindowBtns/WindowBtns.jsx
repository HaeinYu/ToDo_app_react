import React from 'react';
import styles from './WindowBtns.module.css';
export default function WindowBtns() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}></div>
      <div className={styles.min}></div>
      <div className={styles.max}></div>
    </div>
  );
}
