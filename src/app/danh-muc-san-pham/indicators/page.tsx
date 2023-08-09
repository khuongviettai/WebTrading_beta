'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Card, { ICard } from '@/components/Card/Card';
import SubNavbar from '@/components/Navbar/SubNavbar';
import { Metadata } from 'next';

const IndicatorsLink: React.FunctionComponent = () => {
  const [indicators, setIndicators] = useState<ICard[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/danh-muc-san-pham/indicators')
      .then(({ data }) => {
        setIndicators(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SubNavbar />
      <Navbar />
      <div className="container">
        <div className="dis-flex flex-wrap indicators">
          {indicators &&
            indicators.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 dis-flex">
                <Card
                  key={index}
                  _id={item._id}
                  title={item.title}
                  image={item.image}
                  download={item.download}
                  describe={item.describe}
                />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndicatorsLink;
