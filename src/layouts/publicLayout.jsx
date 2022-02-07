import React from "react";
import { Outlet } from "react-router";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import BackToTop from "../components/backToTop";
import "../assets/js/main";

const PublicLayout = () => {
  return (
    <>
      {/* ======= Top Bar =======  */}
      <TopBar />
      {/* ======= Header ======= */}
      <div style={{ marginBottom:"110px"}}>
      <Header />
      </div>
      {/* ======= Hero Section ======= */}
      {/* <div className="d-none d-sm-none d-md-block"> */}
      <div className="d-md-block">
      <Carousel />
     </div>
      {/* ======= Main ======= */}
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default PublicLayout;
