import React from "react";
import { Outlet } from "react-router";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import BackToTop from "../components/backToTop";
import "../assets/js/main";


{/* <div className="d-block d-sm-block d-md-none">Solo smartphone</div>
<div className="d-none d-sm-none d-md-block">Solo escritorio</div> */}

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
