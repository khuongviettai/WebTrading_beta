import ContactLayout from '@/layouts/Contact/Contact';
import * as React from 'react';
import { Metadata } from 'next';

export interface IContactLinkProps {}

export default function ContactLink(props: IContactLinkProps) {
  return <ContactLayout />;
}

export const metadata: Metadata = {
  title: 'Bài viết',
  description: 'Welcome to Khuong Viet Tai',
};
