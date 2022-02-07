import "../assets/css/testimonials.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  function generateStar(numberStar) {
    // let star = (
    //   <FontAwesomeIcon icon={["fas", "star"]} style={{ color: "yellow" }} />
    // );
    let star2 = "⭐";
    return star2.repeat(numberStar);
  }

  return (
    <section className="home-testimonial">
      <h2 className="bg-secondary text-center pt-0 justify-content-center" >Explora la <span className="color-du">experiencia</span> de los comensales</h2>
      <div className="container">
        <div className="row d-flex justify-content-center testimonial-pos">

        </div>
        <section className="home-testimonial-bottom">
          <div className="container testimonial-inner">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 style-3">
                <div className="tour-item ">
                  <div className="tour-desc bg-transparent-testimonial m-2" >
                    <div className="d-flex justify-content-center pt-2 pb-2">
                      <img
                        className="tm-people"
                        src="https://assets.imgix.net/unsplash/bridge.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div className="link-name d-flex justify-content-center">
                      <h3 className="color-du">Cliente 1</h3>
                    </div>
                    <div className="tour-text color-grey-3 text-center">
                        
                      <p>
                        <span
                          className="color-du fw-bold testimonial-comilla"
                        >
                          “
                        </span>
                        Aquí saldra el comentario escrito por el comensal
                        <span
                          className="color-du fw-bold testimonial-comilla"
                        >
                          ”
                        </span>
                      </p>
                    </div>
                    <div className="link-position d-flex justify-content-center">
                      {generateStar(5)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 style-3">
                <div className="tour-item ">
                  <div
                    className="tour-desc bg-transparent-testimonial m-2"
                  >
                    <div className="d-flex justify-content-center pt-2 pb-2">
                      <img
                        className="tm-people"
                        src="https://assets.imgix.net/unsplash/bridge.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div className="link-name d-flex justify-content-center">
                    <h3 className="color-du">Cliente 2</h3>
                    </div>
                    <div className="tour-text color-grey-3 text-center">
                      <p>
                        <span
                          className="color-du fw-bold testimonial-comilla"
                        >
                          “
                        </span>
                        Aquí saldra el comentario escrito por el comensal
                        <span
                          className="color-du fw-bold testimonial-comilla"
                        >
                          ”
                        </span>
                      </p>
                    </div>
                    <div className="link-position d-flex justify-content-center">
                      {generateStar(4)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 style-3">
                <div className="tour-item ">
                  <div className="tour-desc bg-transparent-testimonial m-2">
                    <div className="d-flex justify-content-center pt-2 pb-2">
                      <img
                        className="tm-people"
                        src="https://assets.imgix.net/unsplash/bridge.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                    </div>
                    <div className="link-name d-flex justify-content-center">
                    <h3 className="color-du">Cliente 3</h3>
                    </div>
                    <div className="tour-text color-grey-3 text-center">
                      <p>
                        <span
                          className="color-du fw-bold testimonial-comilla"
                        >
                          “
                        </span>
                        Aquí saldra el comentario escrito por el comensal
                        <span
                          className="color-du fw-bold testimonial-comilla"
                        >
                          ”
                        </span>
                      </p>
                    </div>
                    <div className="link-position d-flex justify-content-center">
                      {generateStar(5)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
