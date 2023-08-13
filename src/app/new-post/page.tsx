import React from 'react';
import Editor from '@/components/Editor/Editor';
import Footer from '@/components/Footer/Footer';

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
