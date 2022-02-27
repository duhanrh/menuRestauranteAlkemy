import ImgLogo from "../assets/img/logo.png";
import TopBar from "../components/topbar";

const Header = () => {
  return (
    <header id="headere" className="bg-dark fixed-top">
      <TopBar />
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        
        <div className="logo">
          <a href="/">
            <img src={ImgLogo} alt="Logo RB" />
            <br />
          </a>
        </div>

        <a href="auth" className="bg-du text-white book-a-table-btn scrollto">
          Ingresar
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Nosotros
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#events">
                Eventos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#chefs">
                Chefs
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="gallery">
                Galeria
              </a>
            </li>
            <li className="dropdown">
              <a href="/#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="/#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="/#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Drop Down 2</a>
                </li>
                <li>
                  <a href="/#">Drop Down 3</a>
                </li>
                <li>
                  <a href="/#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a
          href="#book-a-table"
          className="bg-du text-white book-a-table-btn scrollto btnn"
        >
          Reservar
        </a>

      </div>
    </header>
  );
};

export default Header;
