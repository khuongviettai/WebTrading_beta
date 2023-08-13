import React from 'react';
import styles from './NewsItem.module.scss';
import Image from 'next/image';
import book from '../../assets/images/book.png';

export interface INewsItem {}

const NewsItem: React.FunctionComponent<INewsItem> = () => {
  return (
    <div className={styles.NewsItem}>
      <a href="" className={styles.NewsItem_link}>
        <Image
          src={book}
          alt="book"
          className={styles.NewsItem_img}
          width={170}
          height={170}
        />
      </a>
      <div className={styles.NewsItem_box_text}>
        <a href="" className={styles.NewsItem_text_link}>
          U.S. stocks jump after better-than-expected inflation report
        </a>
        <div>
          <a href="" className={styles.NewsItem_link_user}>
            <span className={styles.NewsItem_user}>Khuong Viet Tai</span>
          </a>
        </div>

        <p className={styles.NewsItem_text}>
          By Bansari Mayur Kamdar and Johann M Cherian (Reuters) - Wall Street
          was set to open higher on Thursday after milder-than-feared July
          consumer prices data fueled hopes the Federal...
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
