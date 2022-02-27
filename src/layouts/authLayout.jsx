import React from "react";
import { Outlet } from "react-router";
//import "../assets/js/main";

const AuthLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
