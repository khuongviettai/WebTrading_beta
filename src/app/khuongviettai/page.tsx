import KhuongVietTaiLayout from '@/layouts/KhuongVietTai/KhuongViettaiLayout';
import * as React from 'react';
import { Metadata } from 'next';

export interface IKhuongVIetTaiLinkProps {}

export default function KhuongVIetTaiLink(props: IKhuongVIetTaiLinkProps) {
  return <KhuongVietTaiLayout />;
}

export const metadata: Metadata = {
  title: 'Giới thiệu về Khương Viết Tài - Lập Trình Viên và Đam Mê Tài Chính',
  description:
    'Xin chào, tôi là Khương Viết Tài - một lập trình viên với niềm đam mê về tài chính. Khám phá hành trình kết hợp giữa lập trình và kiến thức tài chính trên trang cá nhân của tôi.',
  icons: {
    icon: '/favicon.ico',
  },
};
