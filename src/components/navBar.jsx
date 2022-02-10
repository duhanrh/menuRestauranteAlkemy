import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();
  const cerrarSesion = () => {
    //localStorage.setItem('token', null);
    localStorage.removeItem("token");
    navigate('/');
    };

  return (
    <header className="navbar navbar-warning sticky-top bg-warning flex-md-nowrap p-0 shadow">
      {/* <a className="text-white col-md-3 col-lg-2 me-0 px-3" href="/#">
        Bambini
      </a> */}
      <Link
              to="/administrator/"
              className="text-white col-md-3 col-lg-2 me-0 px-3"
            >
               Bambini
            </Link>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="/#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-white">
          <FontAwesomeIcon icon={['fa', 'bars']}/>
        </span>
      </button>
      <input
        className="form-control form-control w-100"
        type="text"
        placeholder="Buscar información"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <button className="nav-link px-3 text-white" onClick={() => cerrarSesion()}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
