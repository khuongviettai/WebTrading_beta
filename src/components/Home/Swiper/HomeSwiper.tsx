"use client";
import React from "react";

import styles from "./HomeSwiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import what_is_forex from '../../../assets/images/What-is-forex-trading.png'
import forex from '../../../assets/images/forex.png';
import forex_banner1 from '../../../assets/images/Forex-banner1.png'
import forex_banner3 from '../../../assets/images/Forex-banner3.png'
import forex_banner2 from '../../../assets/images/Forex-baner2.png'
import "./Swiper.css";

export interface IHomeSwiper {}

const HomeSwiper: React.FunctionComponent<IHomeSwiper> = () => {
  return (
    <div className={styles.HomeSwiper}>
      <div className="container">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
          className={styles.HomeSwiper_box}
        >
          <SwiperSlide>
            <Image src={what_is_forex} alt="trading" className={styles.HomeSwiper_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={forex} alt="trading" className={styles.HomeSwiper_img} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={forex_banner1} alt="trading" className={styles.HomeSwiper_img}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={forex_banner2} alt="trading" className={styles.HomeSwiper_img}/>
          </SwiperSlide>
            <SwiperSlide>
                <Image src={forex_banner3} alt="trading" className={styles.HomeSwiper_img}/>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSwiper;
