import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/navBar";
import SiderBar from "../components/siderBar";
//import "../assets/js/dashboard";

const PrivateLayout = () => {
  return (
    <>
      <NavBar />
      <div class="container-fluid">
        <div className="row">
          <SiderBar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
