import ContactLayout from '@/layouts/Contact/Contact';
import * as React from 'react';
import { Metadata } from 'next';

export interface IContactLinkProps {}

export default function ContactLink(props: IContactLinkProps) {
  return <ContactLayout />;
}

export const metadata: Metadata = {
  title: 'Liên hệ - Khuong Viet Tai',
  description:
    'Chào mừng bạn đến với Khuong Viet Tai - nơi kết nối và học hỏi các mối quan hệ và kiến thức về tài chính. Hãy cùng mình tạo nên một cộng đồng lành mạnh.',
  icons: {
    icon: '/favicon.ico',
  },
};
