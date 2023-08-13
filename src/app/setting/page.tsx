import React from 'react';
import Setting from '@/layouts/Setting/Setting';
import Navbar from '@/components/Navbar/Navbar';
import SubNavbar from '@/components/Navbar/SubNavbar';
import Footer from '@/components/Footer/Footer';

export interface ISettingLink {}

const SettingLink: React.FunctionComponent<ISettingLink> = () => {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <Setting />
      <Footer />
    </>
  );
};

export default SettingLink;
