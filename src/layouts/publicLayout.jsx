import React from "react";
import { Outlet } from "react-router";
// import TopBar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import BackToTop from "../components/backToTop";
//import "../assets/js/main";

const PublicLayout = () => {
  return (
    <>
      <section id="contentHeader">
      <Header />
      </section>
      <section id="contentCarousel-" className="d-md-block">
      <Carousel />
     </section>
     <section>
      <main>
        <Outlet />
      </main>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
};

export default PublicLayout;
