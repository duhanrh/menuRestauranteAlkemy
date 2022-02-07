import "../assets/css/carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  return (
    <section id="headerCarousel">
      <div
        id="myCarousel"
        className="carousel slide"
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.5) !important",
        }}
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="text-white fw-bold" style={{ fontSize: "48px" }}>
                  Restaurante <span className="color-du">Bambini</span>
                </h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <div>
                  <a
                    href="#menu"
                    className="btn btn-outline-warning rounded-pill m-2"
                    style={{ borderWidth: "2px", borderColor: "#ffb03b" }}
                  >
                    Nuestro Menú
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn btn-outline-warning rounded-pill m-2"
                    style={{ borderWidth: "2px", borderColor: "#ffb03b" }}
                  >
                    Reservar una mesa
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <div>
                  <a
                    href="#menu"
                    className="btn btn-outline-warning rounded-pill m-2"
                  >
                    Nuestro Menú
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn btn-outline-warning rounded-pill m-2"
                  >
                    Reservar una mesa
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <div>
                  <a
                    href="#menu"
                    className="btn btn-outline-warning rounded-pill m-2"
                  >
                    Nuestro Menú
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn btn-outline-warning rounded-pill m-2"
                  >
                    Reservar una mesa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;