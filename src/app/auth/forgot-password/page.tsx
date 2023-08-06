import React from 'react';
import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword';

export interface IForgotPasswordLink {}

const ForgotPasswordLink: React.FunctionComponent<IForgotPasswordLink> = () => {
  return <ForgotPassword />;
};
export default ForgotPasswordLink;
