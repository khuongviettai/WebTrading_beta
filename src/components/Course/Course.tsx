import React from 'react';
import styles from './Course.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import trading from '../../assets/images/personal.png';
import personal from '../../assets/icons/account_circle.png';

export interface ICourse {}

const Course: React.FunctionComponent<ICourse> = () => {
  return (
    <div className={styles.Course}>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <div className={styles.Course_box}>
          <div className={styles.Course_box_img}>
            <Link href="" className={styles.Course_box_img_link}>
              <Image src={trading} alt="" className={styles.Course_img} />
            </Link>
          </div>
          <div className={styles.Course_box_info}>
            <div className={styles.Course_box_date_post}>
              <span className={styles.Course_date_post}>10/7/2022</span>
            </div>
            <div className={styles.Course_user_box}>
              <Link href="" className={styles.Course_box_user_name}>
                <Image
                  src={personal}
                  alt=""
                  className={styles.Course_box_user_img}
                />
                Khuong Viet Tai
              </Link>
            </div>
            <h3 className={styles.Course_title}>
              <Link href="" className={styles.Course_title_link}>
                kdsdk
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
