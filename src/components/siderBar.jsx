import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PrivateComponent from "../components/privateComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgLogo from "../assets/img/logo.png";
import "../assets/css/header.css";

const SiderBar = () => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [toggle, setToggle] = useState(false);
  const [collapse, setCollapse] = useState("");

  return (
    <>
      <div className="fixed-top navbar navbar-warning sticky-top bg-du d-block d-sm-none p-0 shadow">
        <Link
          to="/administrator/"
          className="text-white col-md-3 col-lg-2 me-0 px-3"
        >
          Bambini
        </Link>
        <button
          className="navbar-toggler position-absolute"
          type="button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span className="navbar-toggler-icon text-white">
            <FontAwesomeIcon icon={["fa", "bars"]} />
          </span>
        </button>
      </div>
      <nav
        id="sidebarMenu"
        className={
          toggle ? "col-md-3 col-lg-2 d-md-block sidebar bg-dark h-100" :"col-md-3 col-lg-2 d-md-block sidebar bg-dark h-100 collapse"
        }
      >
        <PrivateComponent>
          <div className="position-sticky pt-3">
            <img
              src={ImgLogo}
              className="d-none d-sm-block mx-auto border bg-dark"
              style={{ borderRadius: "50%" }}
              height="100px"
              alt="Logo RB"
            />
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  to="/administrator/"
                  className="nav-link btn btn-outline-warning text-white m-2"
                >
                  {" "}
                  <FontAwesomeIcon icon={["fa", "columns"]} /> Challenge
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/administrator/ordenes"
                  className="nav-link btn btn-outline-warning text-white m-2"
                >
                  {" "}
                  <FontAwesomeIcon icon={["fa", "book"]} /> Pedidos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/administrator/productos"
                  className="nav-link btn btn-outline-warning text-white m-2"
                >
                  {" "}
                  <FontAwesomeIcon icon={["fa", "shopping-cart"]} /> Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/administrator/clientes"
                  className="nav-link btn btn-outline-warning text-white m-2"
                >
                  {" "}
                  <FontAwesomeIcon icon={["fa", "person-booth"]} /> Clientes
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/administrator/reportes"
                  className="nav-link btn btn-outline-warning text-white m-2"
                >
                  {" "}
                  <FontAwesomeIcon icon={["fa", "poll"]} /> Reportes
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-warning w-100"
                  onClick={() => cerrarSesion()}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </PrivateComponent>
      </nav>
    </>
  );
};
export default SiderBar;
