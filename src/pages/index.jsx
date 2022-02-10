import OurMenu from "../components/ourMenu";
import Contact from "../components/contact";
//import ImgAbout from "../assets/img/about.jpg";
import ImgChef1 from "../assets/img/chefs/chefs-1.jpg";
import ImgChef2 from "../assets/img/chefs/chefs-2.jpg";
import ImgChef3 from "../assets/img/chefs/chefs-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookTable from "../components/bookTable";

import ImgEventCustom from "../assets/img/event-custom.jpg";
import ImgEventFiesta from "../assets/img/event-birthday.jpg";
import ImgEventPrivate from "../assets/img/event-private.jpg";
import Testimonials from "../components/testimonials";

const Index = () => {
  return (
    <>
      {/*  ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="d-block d-sm-block d-md-none">Solo smartphone</div>
            <div className="d-none d-sm-none d-md-block">Solo escritorio</div> */}
            <div
              className="col-lg-5 bg-about video-box text-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "400px",
              }}
            >
              {/* minHeight: "100vh" */}

              <span className="align-middle">
                <a
                  target="_blank"
                  className=""
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                >
                  <i className="bi ms-4 align-items-center">
                    <FontAwesomeIcon icon={["far", "play-circle"]} size="6x" />
                  </i>
                </a>
              </span>

              {/* <img src={ImgAbout} width="100%" height="50" alt="aqui va la imagen" /> */}
              {/* <img src={require('../assets/img/about.jpg')} alt=""/> */}
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
              <div className="content">
                <h3>
                  Eum ipsam laborum deleniti{" "}
                  <strong>velit pariatur architecto aut nihil</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End About Section */}
      {/*  ======= Whu Us Section ======= */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-title">
            <h2>
              Por qué elegir <span>Nuestro Restaurante</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="box">
                <span>01</span>
                <h4>Razon 1</h4>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <span>02</span>
                <h4>Razon 2</h4>
                <p>
                  Dolorem est fugiat occaecati voluptate velit esse. Dicta
                  veritatis dolor quod et vel dire leno para dest
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <span>03</span>
                <h4>Razon 3</h4>
                <p>
                  Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                  sunt debitis quo vel nam quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Whu Us Section */}
      {/*  ======= Menu Section ======= */}
      <OurMenu />
      {/*  End Menu Section */}
      {/*  ======= Events Section ======= */}
      <section id="events" className="events">
        <div className="container-fluide" style={{ minHeight: "560px" }}>
          <div className="section-title">
            <h2>
              Organiza Tus <span className="color-du">Eventos</span> en Nuestro
              Restaurante
            </h2>
          </div>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators text-white">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="carousel-caption">
                  <h3 className="color-du pb-2">Fiestas de cumpleaños</h3>
                  <div className="row event-item">
                    <div className="col-lg-5">
                      <img src={ImgEventFiesta} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-7 pt-4 pt-lg-0 content text-start">
                      <div className="price">
                        <p>
                          <span>$165</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="carousel-caption">
                  <h3 className="color-du">Fiestas privadas</h3>
                  <div className="row event-item">
                    <div className="col-lg-5">
                      <img
                        src={ImgEventPrivate}
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 pt-4 pt-lg-0 content text-start">
                      <div className="price">
                        <p>
                          <span>$280</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <h3 className="color-du">Fiestas personalizadas</h3>
                  <div className="row event-item">
                    <div className="col-lg-5">
                      <img src={ImgEventCustom} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-7 pt-4 pt-lg-0 content text-start">
                      <div className="price">
                        <p>
                          <span>$115</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Events Section */}
      {/*  ======= Book A Table Section ======= */}
      <BookTable />
      {/* End Book A Table Section */}
      {/*  ======= Chefs Section ======= */}
      <section id="chefs" className="chefs">
        <div className="container">
          <div className="section-title">
            <h2>
              Nuestros <span>Chefs</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card m-2">
                <img className="card-img-top" src={ImgChef1} alt="Card" />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="color-du">Duhan Renteria</h5>
                    Especialista en lore lorem
                    </p>
                    <div className="social-links">
                    <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card m-2">
                <img className="card-img-top" src={ImgChef2} alt="Card" />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="color-du">Carmen Herca</h5>
                    Especialista en lore lorem
                    </p>
                     <div className="social-links">
                     <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </div>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card m-2">
                <img className="card-img-top" src={ImgChef3} alt="Card" />
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="color-du">Alex King</h5>
                    Especialista en lore lorem
                  </p>
                  <div className="social-links">
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                      <a href="/#" className="m-2">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  End Chefs Section */}
      {/*  ======= Testimonials Section ======= */}
      <div className="d-none d-sm-none d-md-block">
        <Testimonials />
      </div>

      {/* End Testimonials Section */}
      {/* ======= Contact Section ======= */}
      <Contact />
      {/* ======= End Contact Section ======= */}
    </>
  );
};

export default Index;
