import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [toggle, setToggle] = useState(false);

  return (
    
    <header className="navbar navbar-warning sticky-top bg-du flex-md-nowrap p-0 shadow">
      <Link
        to="/administrator/"
        className="text-white col-md-3 col-lg-2 me-0 px-3"
      >
        Bambini
      </Link>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <span className="navbar-toggler-icon text-white">
          <FontAwesomeIcon icon={["fa", "bars"]} />
        </span>
      </button>
      {/* <div className="navbar-nav">
        <div className="nav-item text-nowrap m-2">
          <button
            className="nav-link btn btn-outline-dark px-3 text-white"
            onClick={() => cerrarSesion()}
          >
            Cerrar sesión
          </button>
        </div>
      </div> */}
    </header>
  );
};
export default NavBar;
