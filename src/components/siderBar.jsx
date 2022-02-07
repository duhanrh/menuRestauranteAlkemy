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
            <a className="nav-link btn btn-outline-warning text-white m-2" aria-current="page" href="/administrator/#">
              <span data-feather="/admin/"></span>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-outline-warning text-white m-2" href="/administrator/ordenes">
              <span data-feather="file"></span>
              Ordenes
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link btn btn-outline-warning text-white m-2" href="/administrator/productos">
              <span data-feather="shopping-cart"></span>
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-outline-warning text-white m-2" href="/administrator/clientes">
              <span data-feather="users"></span>
              Clientes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-outline-warning text-white m-2" href="/administrator/reportes">
              <span data-feather="bar-chart-2"></span>
              Reportes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SiderBar;
