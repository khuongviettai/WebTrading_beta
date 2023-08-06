import React from 'react';
import styles from './SingleCard.module.scss';
import book from '../../assets/images/book.png';
import Image from 'next/image';

export interface ISingleCard {}

const SingleCard: React.FunctionComponent<ISingleCard> = () => {
  return (
    <div className={styles.SingleCard}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.SingleCard_box_image}>
              <div className={styles.SingleCard_box_image_inner}>
                <div className={styles.SingleCard_box_image_inner_data}>
                  <Image
                    src={book}
                    alt="book"
                    className={styles.SingleCard_image}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className={styles.SingleCard_info}>
              <div className={styles.SingleCard_info_title}>
                Mochi Kem Chocolate
              </div>
            </div>
            <a
              href=""
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
              <p className={styles.SingleCard_des_info}>
                Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng
                khởi. Không đắng khét như cà phê truyền thống, The Coffee House
                Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100%
                cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa
                đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với
                topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến
                ngụm cuối cùng.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
