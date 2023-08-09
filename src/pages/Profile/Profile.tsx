import React from 'react';
import styles from './Profile.module.scss';
import Image from 'next/image';
import icons from '@/utils/icons';

export interface IProfile {}

const Profile: React.FunctionComponent<IProfile> = () => {
  return (
    <div className={styles.Profile}>
      <div className="container">
        <div className={styles.Profile_box}>
          <h2 className={styles.Profile_title}>Thông tin cá nhân</h2>
          <div className={styles.Profile_box_info}>
            <div className={styles.Profile_wrapper}>
              <div className={styles.Profile_box_input}>
                <h4 className={styles.Profile_box_input_title}>Họ tên</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
