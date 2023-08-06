import React from 'react';
import styles from './NotFound.module.scss';

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
        </div>
      </div>
    </div>
  );
};

export default NotFound;
