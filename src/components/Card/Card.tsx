import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import forex from '../../assets/images/forex.png';

export interface ICard {}

const Card: React.FunctionComponent<ICard> = () => {
  return (
    <div className={styles.Card}>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <div className={styles.Card_box}>
          <div className={styles.Card_box_img}>
            <Link href="" className={styles.Card_box_img_link}>
              <Image src={forex} alt="" className={styles.Card_img} />
              <div className={styles.Card_box_des}>
                <p className={styles.Card_des}>hello</p>
              </div>
            </Link>
          </div>
          <Link href="" className={styles.Card_box_title_link}>
            <h4 className={styles.Card_box_title}>Khuong Viet Tai </h4>
          </Link>
          <div className={styles.Card_box_see_more}>
            <Link href="" className={styles.Card_see_more_link}>
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
