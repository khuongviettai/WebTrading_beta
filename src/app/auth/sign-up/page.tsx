import SignUpLayout from '@/layouts/SignUp/SignUpLayout';
import * as React from 'react';
import { Metadata } from 'next';

export interface ISignUpLinkProps {}

export default function SignUpLink(props: ISignUpLinkProps) {
  return <SignUpLayout />;
}

export const metadata: Metadata = {
  title: 'Đăng ký',
  description: 'Welcome to Khuong Viet Tai',
};
