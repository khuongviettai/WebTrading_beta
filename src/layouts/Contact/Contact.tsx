import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SubNavbar from "@/components/Navbar/SubNavbar";
import Contact from "@/pages/Contact/Contact";
import * as React from "react";

export interface IContactLayoutProps {}

export default function ContactLayout(props: IContactLayoutProps) {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
