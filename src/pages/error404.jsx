import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/error404.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgLogo from "../assets/img/logo.png";

const Error404 = () => {
    let urlReturn = "/";
    if (localStorage.token !== undefined) {
        urlReturn = "/administrator";
     }

  return (
    <div id="error404" name="error404" className="bg-login ">
      <div className="container-fluid">
        <div
          className="row bg-login justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-7">
            <div className="error-template" style={{ borderRadius: "2rem" }}>
            <img
                    src={ImgLogo}
                    className="d-block mx-auto border bg-dark"
                    style={{ borderRadius: "50%" }}
                    height="130"
                    alt="Logo RB"
                  />
              <h1 className="error-title" >¡Ups!</h1>
              <div className="error-details">
                <h2>lo sentimos, ¡el recurso solicitado no se encuentra!</h2>
              </div>
              <div className="error-actions">
                <Link to={urlReturn}>
                  <button className="btn btn-lg btn-outline-warning text-black">
                    {" "}
                    <FontAwesomeIcon icon={["fa", "home"]} /> Ir a Home{" "}
                  </button>
                </Link>
                <button className="btn btn-lg btn-outline-warning text-black">
                  {" "}
                  <FontAwesomeIcon icon={["fa", "at"]} /> Ir a soporte{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
