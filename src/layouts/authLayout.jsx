import React from "react";
import { Outlet } from "react-router";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import BackToTop from "../components/backToTop";
import "../assets/js/main";

{
  /* <div className="d-block d-sm-block d-md-none">Solo smartphone</div>
<div className="d-none d-sm-none d-md-block">Solo escritorio</div> */
}

const AuthLayout = () => {
  return (
    <>
      {/* ======= Top Bar =======  */}
      {/* <TopBar /> */}
      {/* ======= Main ======= */}
      <main>
        <Outlet />
      </main>
      {/* <div className="fixed-bottom bg-dark text-center text-white" width="60px">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Restaurante Bambini</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://solucionesrh.net.co/">Duhan Renteria</a>
        </div>
      </div> */}
    </>
  );
};

export default AuthLayout;
