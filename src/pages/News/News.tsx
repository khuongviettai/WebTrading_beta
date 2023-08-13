import React from 'react';
import styles from './News.module.scss';
import NewsItem from '@/components/NewsItem/NewsItem';

export interface INews {}

const News: React.FunctionComponent<INews> = () => {
  return (
    <div className={styles.News}>
      <div className="container">
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
