import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import NotFound from '@/app/not-found';
import image_not_available from '../../assets/images/error/image_not_available.png';

export interface ICard {
  key: number;
  _id: object;
  title: string;
  image: string;
  download: string;
  describe: string;
}

const Card: React.FunctionComponent<ICard> = (props) => {
  const isBookLink = window.location.href.includes('/danh-muc-san-pham/books');
  const category = isBookLink ? 'books' : 'indicators';

  const generateHref = (category: string, id: string) => {
    if (category === 'books') {
      return `/danh-muc-san-pham/books/${id}`;
    } else if (category === 'indicators') {
      return `/danh-muc-san-pham/indicators/${id}`;
    } else {
      return <NotFound />;
    }
  };
  // @ts-ignore
  const href: string = generateHref(category, props._id);

  return (
    <div className={styles.Card_box}>
      <div className={styles.Card_wrap_img}>
        <div className={styles.Card_block_img}>
          <div className={styles.Card_box_img}>
            <Link href={href} className={styles.Card_box_img_link}>
              {props.image ? (
                <Image
                  src={props.image}
                  alt={props.title}
                  className={styles.Card_img}
                  fill={true}
                />
              ) : (
                <Image
                  src={image_not_available}
                  alt="image_not_available"
                  className={styles.Card_img}
                />
              )}
            </Link>
          </div>
          <div className={styles.Card_box_des}>
            <Link href={href} className={styles.Card_des}>
              {props.describe.substring(0, 500)}...
            </Link>
          </div>
        </div>
      </div>
      <Link href={href} className={styles.Card_box_title_link}>
        <h4 className={styles.Card_box_title}>{props.title} </h4>
      </Link>
      <div className={styles.Card_box_see_more}>
        <Link href={href} className={styles.Card_see_more_link}>
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default Card;
