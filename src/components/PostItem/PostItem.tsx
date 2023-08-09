import React from 'react';
import styles from './PostItem.module.scss';
import Image from 'next/image';
import user from '../../assets/images/personal.png';

export interface IPostItem {}

const PostItem: React.FunctionComponent<IPostItem> = () => {
  return (
    <div className={styles.PostItem}>
      <div className={styles.PostItem_header}>
        <a href="">
          <span className={styles.PostItem_author}>Khuong Viet Tai</span>
        </a>
      </div>

      <div className={styles.PostItem_body}>
        <div className={styles.PostItem_body_info}>
          <a href="">
            <h3 className={styles.PostItem_body_title}>
              Giới thiệu KHuong Viet Tai
            </h3>
          </a>
          <p className={styles.PostItem_body_des}>
            Giới thiệu KHuong Viet Tai Giới thiệu KHuong Viet TaiGiới thiệu
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
