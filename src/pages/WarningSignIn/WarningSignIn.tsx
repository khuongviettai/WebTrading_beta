import React from 'react';
import styles from './WarningSignIn.module.scss';
import warning from '../../assets/images/error/warning.png';
import Image from 'next/image';
import Link from 'next/link';

export interface IWarningSignIn {}

const WarningSignIn: React.FunctionComponent<IWarningSignIn> = () => {
  return (
    <div className={styles.WarningSignIn}>
      <div className={styles.WarningSignIn_box}>
        <div className={styles.WarningSignIn_box_img}>
          <Image
            src={warning}
            alt="warning"
            width={40}
            height={40}
            className={styles.WarningSignIn_img}
          />
        </div>
        <h3 className={styles.WarningSignIn_title}>Cảnh báo</h3>
        <div className={styles.WarningSignIn_box_desc}>
          <p className={styles.WarningSignIn_desc}>
            Vui lòng đăng nhập để sử dụng tính năng này
          </p>
        </div>
        <div className={styles.WarningSignIn_box_link}>
          <Link
            href="/auth/sign-in"
            className={styles.WarningSignIn_link_sign_in}
          >
            Đăng nhập
          </Link>

          <Link href="/" className={styles.WarningSignIn_link_home}>
            Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarningSignIn;
