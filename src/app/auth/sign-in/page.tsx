import * as React from 'react';
import { Metadata } from 'next';
import SignIn from '@/pages/SignIn/SignIn';

export interface ISignInLinkProps {}

export default function SignInLink(props: ISignInLinkProps) {
  return <SignIn />;
}

export const metadata: Metadata = {
  title: 'Chào mừng bạn đến với Khuong Viet Tai',
  description:
    'Chào mừng bạn đến với  Khuong Viet Tai. Đăng nhập để truy cập và quản lý tài khoản của bạn.',
  icons: {
    icon: '/favicon.ico',
  },
};
