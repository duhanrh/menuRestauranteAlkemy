import { Link } from "react-router-dom";

const SiderBar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
    >
      {/* bg-light */}
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/administrator/"
              className="nav-link btn btn-outline-warning text-white m-2"
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/administrator/ordenes"
              className="nav-link btn btn-outline-warning text-white m-2"
            >
              Ordenes
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/administrator/productos"
              className="nav-link btn btn-outline-warning text-white m-2"
            >
              Productos
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/administrator/clientes"
              className="nav-link btn btn-outline-warning text-white m-2"
            >
              Clientes
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/administrator/reportes"
              className="nav-link btn btn-outline-warning text-white m-2"
            >
              Reportes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SiderBar;
