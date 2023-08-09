import React from 'react';
import styles from './NotFound.module.scss';
import Link from 'next/link';

export interface INotFound {}

const NotFound: React.FunctionComponent<INotFound> = () => {
  return (
    <div className={styles.NotFound}>
      <div className="container">
        <div className={styles.NotFound_box}>
          <h1 className={styles.NotFound_title}>404</h1>
          <span className={styles.NotFound_subTitle}>
            Oops! Page not found.
          </span>
          <div>
            <span className={styles.NotFound_content}>
              Xin lỗi! Nhưng trang bạn đang tìm kiếm không được tìm thấy. Vui
              lòng đảm bảo rằng bạn đã nhập đúng URL.
            </span>
          </div>
          <div className={styles.NotFound_back_home}>
            <Link href="/" className={styles.NotFound_back_home_link}>
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
