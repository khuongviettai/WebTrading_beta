import SubNavbar from '@/components/Navbar/SubNavbar';
import Navbar from '@/components/Navbar/Navbar';
import HomeSwiper from '@/components/Home/Swiper/HomeSwiper';
import Profile from '@/pages/Profile/Profile';
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      {/*<SubNavbar />*/}
      {/*<Navbar />*/}
      {/*<HomeSwiper />*/}
      <Profile />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Khương Viết Tài',
  description: 'Welcome to Khuong Viet Tai',
  icons: {
    icon: '/favicon.ico',
  },
};
