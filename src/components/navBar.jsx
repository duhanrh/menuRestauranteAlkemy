const NavBar = () => {
  return (
    <header className="navbar navbar-warning sticky-top bg-warning flex-md-nowrap p-0 shadow">
      <a className="text-white col-md-3 col-lg-2 me-0 px-3" href="/#">
        Bambini
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="/#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <input
        className="form-control form-control w-100"
        type="text"
        placeholder="Buscar información"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3 text-white" href="/#">
            Cerrar sesión
          </a>
        </div>
      </div>
    </header>
  );
};
export default NavBar;