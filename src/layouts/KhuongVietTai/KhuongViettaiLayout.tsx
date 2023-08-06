import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SubNavbar from "@/components/Navbar/SubNavbar";
import KhuongVietTai from "@/pages/KhuongVietTai/KhuongVietTai";
import * as React from "react";

export interface IKhuongVietTaiLayoutProps {}

export default function KhuongVietTaiLayout(props: IKhuongVietTaiLayoutProps) {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <KhuongVietTai />
      <Footer />
    </>
  );
}
