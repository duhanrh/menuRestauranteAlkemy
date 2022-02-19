import React, {useState} from "react";
import { Outlet, Navigate } from "react-router";
import NavBar from "../components/navBar";
import SiderBar from "../components/siderBar";
//import jwt_decode from "jwt-decode";
import "../assets/css/dashboard.css";

const PrivateLayout = () => {

  //const decoded = jwt_decode(localStorage.token)

  if (localStorage.token !== undefined) {
    return (
      <>
        <div className="d-md-none">
          <NavBar />
        </div>
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
    return <Navigate to="/auth" />;
  }
};

export default PrivateLayout;
