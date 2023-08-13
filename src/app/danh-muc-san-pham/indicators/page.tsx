import React from 'react';
import { Metadata } from 'next';
import Indicators from '@/layouts/danh-muc-san-pham/Indicators/Indicators';

const IndicatorsLink: React.FC = () => {
  return <Indicators />;
};

export default IndicatorsLink;

// @ts-ignore
export const metadata: Metadata = {
  title: 'Indicator - Công cụ đo lường và phân tích tại Khuong Viet Tai',
  description:
    'Khám phá bộ công cụ Indicator giúp bạn đo lường và phân tích thông tin quan trọng tại Khuong Viet Tai. Sử dụng các chỉ số và dữ liệu để hỗ trợ quyết định thông minh về tài chính và đầu tư.',
  icons: {
    icon: '/favicon.ico',
  },
};
