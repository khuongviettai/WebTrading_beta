import React from 'react';
import Editor from '@/components/Editor/Editor';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';

export interface INewPostLink {}

const NewPostLink: React.FunctionComponent<INewPostLink> = () => {
  return (
    <>
      <Editor />
      <Footer />
    </>
  );
};

export default NewPostLink;

export const metadata: Metadata = {
  title: 'Bài viết',
  description: 'Welcome to Khuong Viet Tai',
};
