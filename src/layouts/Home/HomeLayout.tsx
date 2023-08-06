import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SubNavbar from '@/components/Navbar/SubNavbar';
import HomeSwiper from '@/components/Home/Swiper/HomeSwiper';
import Popup from '@/components/Popup/Popup';

export interface IHomeLayout {}

const HomeLayout: React.FunctionComponent<IHomeLayout> = () => {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <HomeSwiper />
      <Popup />
    </>
  );
};

export default HomeLayout;
