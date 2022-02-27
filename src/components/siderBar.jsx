import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PrivateComponent from "../components/privateComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgLogo from "../assets/img/logo.png";

const SiderBar = () => {

  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
    >
      <PrivateComponent>
        <div className="position-sticky pt-3">
          <img
            src={ImgLogo}
            className="d-block mx-auto border bg-dark"
            style={{ borderRadius: "50%" }}
            height="100"
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
          </ul>
        </div>
      </PrivateComponent>

      <button
        className="nav-link btn btn-warning w-100"
        onClick={() => cerrarSesion()}
      >
        Cerrar sesión
      </button>
    </nav>
  );
};
export default SiderBar;
