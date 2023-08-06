'use client';

import React, { useContext } from 'react';
import styles from './DarkModeToggle.module.scss';
import { ThemeContext } from '@/context/ThemeContext/ThemeContext';

const DarkModeToggle: React.FC = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className={styles.DarkModeToggle}
      onClick={toggle}
      style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
    >
      <div className={styles.icon}>{mode === 'light' ? '🌙' : '🔆'}</div>
    </div>
  );
};

export default DarkModeToggle;
