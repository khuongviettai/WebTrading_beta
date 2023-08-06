import React from 'react';
import styles from './Loading.module.scss';

export interface ILoading {}

const Loading: React.FunctionComponent<ILoading> = () => {
  return (
    <div className={styles.Loading}>
      <svg className={styles.svg}>
        <circle cx="30" cy="30" r="30" className={styles.circle}></circle>
      </svg>
    </div>
  );
};

export default Loading;
