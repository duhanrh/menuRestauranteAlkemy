import React from "react";
import { Outlet, Navigate } from "react-router";
import NavBar from "../components/navBar";
import SiderBar from "../components/siderBar";
import "../assets/css/dashboard.css";
//import LoginPage from "../pages/login";

const PrivateLayout = () => {
  if (localStorage.token !== undefined) {
    return (
      <>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SiderBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
              <Outlet />
            </main>
          </div>
        </div>
      </>
    );
  } else {
    //return <LoginPage />;
    return <Navigate to="/auth" />;
  }
};

export default PrivateLayout;
