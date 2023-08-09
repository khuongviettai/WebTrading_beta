import KhuongVietTaiLayout from '@/layouts/KhuongVietTai/KhuongViettaiLayout';
import * as React from 'react';
import { Metadata } from 'next';

export interface IKhuongVIetTaiLinkProps {}

export default function KhuongVIetTaiLink(props: IKhuongVIetTaiLinkProps) {
  return <KhuongVietTaiLayout />;
}

export const metadata: Metadata = {
  title: 'Khương Viết Tài',
  description: 'Welcome to Khuong Viet Tai',
  icons: {
    icon: '/favicon.ico',
  },
};
