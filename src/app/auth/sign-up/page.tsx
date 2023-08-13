import * as React from 'react';
import { Metadata } from 'next';
import SignUp from '@/pages/SignUp/SignUp';

export interface ISignUpLinkProps {}

export default function SignUpLink(props: ISignUpLinkProps) {
  return <SignUp />;
}

export const metadata: Metadata = {
  title:
    'Đăng ký tài khoản tại Khuong Viet Tai - Kết nối và Học hỏi về Tài chính',
  description:
    'Chào mừng bạn đến với trang đăng ký tài khoản tại Khuong Viet Tai. Hãy gia nhập cùng chúng tôi để kết nối, học hỏi về kiến thức tài chính và xây dựng cộng đồng lành mạnh.',
  icons: {
    icon: '/favicon.ico',
  },
};
