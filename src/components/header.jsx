const Header = () => {
  return (
    <header id="header" className="bg-dark fixed-top d-flex align-items-center header-transparent">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <div className="logo me-auto">
        <h1><a href="index.html">Alkemy</a></h1>
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
          <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
          <li><a className="nav-link scrollto" href="#events">Events</a></li>
          <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
          <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
          <li className="dropdown"><a href="/#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/#">Drop Down 1</a></li>
              <li className="dropdown"><a href="/#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/#">Deep Drop Down 1</a></li>
                  <li><a href="/#">Deep Drop Down 2</a></li>
                  <li><a href="/#">Deep Drop Down 3</a></li>
                  <li><a href="/#">Deep Drop Down 4</a></li>
                  <li><a href="/#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/#">Drop Down 2</a></li>
              <li><a href="/#">Drop Down 3</a></li>
              <li><a href="/#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a href="#book-a-table" className="bg-warning book-a-table-btn scrollto">Reservar una mesa</a> 
      {/* <a href="#book-a-table" className="btn btn-warning" style={{borderRadius:"25%"}}>Reservar</a> */}
    </div>
  </header>
  );
};

export default Header;