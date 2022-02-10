import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/error404.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgLogo from "../assets/img/logo.png";

const Error404 = () => {
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
              <h1 className="error-title">¡Ups!</h1>
              <div className="error-details">
                <h2>lo sentimos, <span className="color-du fw-bold">¡</span>el recurso solicitado no se encuentra<span className="color-du fw-bold">!</span></h2>
              </div>
              <div className="error-actions">
                <Link
                  to={localStorage.token !== undefined ? "/administrator" : "/"}
                >
                  <button className="btn btn-lg btn-outline-warning text-black">
                    {" "}
                    <FontAwesomeIcon icon={["fa", "home"]} /> {" "}
                    {localStorage.token !== undefined
                      ? "Administración"
                      : "Inicio"}
                  </button>
                </Link>
                <Link to="/#contact">
                <button className="btn btn-lg btn-outline-warning text-black">
                  {" "}
                  <FontAwesomeIcon icon={["fa", "at"]} /> Soporte{" "}
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
