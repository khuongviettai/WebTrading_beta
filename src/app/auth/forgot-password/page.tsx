import React from 'react';
import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword';
import { Metadata } from 'next';

export interface IForgotPasswordLink {}

const ForgotPasswordLink: React.FunctionComponent<IForgotPasswordLink> = () => {
  return <ForgotPassword />;
};
export default ForgotPasswordLink;

export const metadata: Metadata = {
  title: 'Quên mật khẩu',
  description: 'Welcome to Khuong Viet Tai',
};
