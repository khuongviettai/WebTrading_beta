import React from 'react';
import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword';
import { Metadata } from 'next';

export interface IForgotPasswordLink {}

const ForgotPasswordLink: React.FunctionComponent<IForgotPasswordLink> = () => {
  return <ForgotPassword />;
};
export default ForgotPasswordLink;

export const metadata: Metadata = {
  title: 'Khôi phục mật khẩu tại Khuong Viet Tai - Hướng dẫn và Hỗ trợ',
  description:
    'Chào mừng bạn đến với trang khôi phục mật khẩu tại Khuong Viet Tai. Chúng tôi cung cấp hướng dẫn và hỗ trợ để bạn có thể lấy lại mật khẩu một cách dễ dàng và nhanh chóng.',
  icons: {
    icon: '/favicon.ico',
  },
};
