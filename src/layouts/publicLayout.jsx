import React from "react";
import { Outlet } from "react-router";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import BackToTop from "../components/backToTop";
import "../assets/js/main";

const PublicLayout = () => {
  return (
    <>
      {/* ======= Top Bar =======  */}
      <TopBar />
      {/* ======= Header ======= */}
      <Header />
      {/* ======= Hero Section ======= */}
      <Hero />
      {/* ======= Main ======= */}
      <>
        <Outlet />
      </>
      <Footer />
      <BackToTop />
    </>
  );
};

export default PublicLayout;
