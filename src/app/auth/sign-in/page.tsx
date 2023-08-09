import SignInLayout from '@/layouts/SignIn/SignInLayout';
import * as React from 'react';
import { Metadata } from 'next';

export interface ISignInLinkProps {}

export default function SignInLink(props: ISignInLinkProps) {
  return <SignInLayout />;
}

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: 'Welcome to Khuong Viet Tai',
};
