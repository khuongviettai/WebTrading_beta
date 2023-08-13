import React from 'react';
import { Metadata } from 'next';
import Book from '@/layouts/danh-muc-san-pham/Book/Book';

export interface IBookLink {}

const BookLink: React.FunctionComponent<IBookLink> = () => {
  return <Book />;
};

export default BookLink;

export const metadata: Metadata = {
  title: 'Sách Ebook - Tài liệu học hữu ích tại Khuong Viet Tai',
  description:
    'Khám phá bộ sưu tập sách Ebook đa dạng và hữu ích tại Khuong Viet Tai. Tự học và nâng cao kiến thức về tài chính cùng với các tài liệu chất lượng.',
  icons: {
    icon: '/favicon.ico',
  },
};
