import SubNavbar from '@/components/Navbar/SubNavbar';
import Navbar from '@/components/Navbar/Navbar';
import HomeSwiper from '@/components/Home/Swiper/HomeSwiper';
import { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <HomeSwiper />
      {/*<Footer />*/}
    </>
  );
}

export const metadata: Metadata = {
  title: 'Khuong Viết Tài',
  description: 'Welcome to Khuong Viet Tai',
  icons: {
    icon: '/favicon.ico',
  },
};
