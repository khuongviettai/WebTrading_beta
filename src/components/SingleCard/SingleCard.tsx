import React from 'react';
import styles from './SingleCard.module.scss';
import book from '../../assets/images/book.png';
import Image from 'next/image';

export interface ISingleCard {
  item: any;
}

const SingleCard: React.FunctionComponent<ISingleCard> = ({ item }) => {
  return (
    <div className={styles.SingleCard}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.SingleCard_box_image}>
              <div className={styles.SingleCard_box_image_inner}>
                <div className={styles.SingleCard_box_image_inner_data}>
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    className={styles.SingleCard_image}
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.SingleCard_info}>
              <div className={styles.SingleCard_info_title}>{item?.title}</div>
            </div>
            <a
              href={item?.download}
              target="_blank"
              className={styles.SingleCard_box_download}
            >
              <span className={styles.SingleCard_box_download_link}>
                Download
              </span>
            </a>
          </div>
        </div>
        <div className={styles.SingleCard_des}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <hr />
              <h4 className={styles.SingleCard_des_title}>Mô tả sản phẩm</h4>
              <p className={styles.SingleCard_des_info}>{item?.describe}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
