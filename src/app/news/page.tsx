import React from 'react';
import News from '@/pages/News/News';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export interface INewsLink {}

const NewsLink: React.FunctionComponent<INewsLink> = () => {
  return (
    <>
      <Navbar />
      <News />;
      <Footer />
    </>
  );
};

export default NewsLink;
