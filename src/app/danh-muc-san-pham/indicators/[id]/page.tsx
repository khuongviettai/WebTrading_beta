'use client';
import React, { useEffect, useState } from 'react';
import SingleCard from '@/components/SingleCard/SingleCard';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import SubNavbar from '@/components/Navbar/SubNavbar';

export interface IIndicatorID {
  id: object;
}

const IndicatorID: React.FunctionComponent<IIndicatorID> = () => {
  const [indicator, setIndicator] = useState(null);
  // @ts-ignore
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/danh-muc-san-pham/indicators/${id}`)
      .then(({ data }) => {
        setIndicator(data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <SubNavbar />
      <Navbar />
      <SingleCard item={indicator} />
      <Footer />
    </>
  );
};

export default IndicatorID;
