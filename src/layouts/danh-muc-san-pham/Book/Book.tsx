'use client';
import React, { useEffect, useState } from 'react';
import Card, { ICard } from '@/components/Card/Card';
import axios from 'axios';
import SubNavbar from '@/components/Navbar/SubNavbar';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export interface IBook {}

const Book: React.FunctionComponent<IBook> = () => {
  const [books, setBooks] = useState<ICard[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/danh-muc-san-pham/books')
      .then(({ data }) => {
        setBooks(data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <>
      <SubNavbar />
      <Navbar />
      <div className="container">
        <div className="dis-flex flex-wrap books">
          {books &&
            books.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
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

export default Book;
