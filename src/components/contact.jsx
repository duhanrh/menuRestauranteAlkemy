import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            <span>Contactanos</span>
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>
      </div>

      <div className="map">
        <h4 className="text-center">Aquí va el mapa</h4>
        {/* <iframe
              style={{border:'0', width: '100%', height: 350}}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe> */}
      </div>

      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i class="bi">
                <FontAwesomeIcon icon={["fa", "map-marked-alt"]} />
              </i>
              <h4>Ubicación:</h4>
              <p>
                Medellín
                <br />
                Antioquia, Colombia
              </p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i class="bi">
                <FontAwesomeIcon icon={["fa", "clock"]} />
              </i>
              <h4>Horario:</h4>
              <p>
                Lunes - Domingo
                <br />
                11:00 AM - 11:00 PM
              </p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi">
                <FontAwesomeIcon icon={["fas", "at"]} />
              </i>
              <h4>Email:</h4>
              <p>
                email@example.com
                <br />
                contact@example.com
              </p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i class="bi">
                <FontAwesomeIcon icon={["fas", "phone-alt"]} />
              </i>
              <h4>Teléfonos:</h4>
              <p>
                +57 XXX XXX XXXX
                <br />
                +57 XXX XXX XXXX
              </p>
            </div>
          </div>
        </div>

        <form
          action="forms/contact.php"
          method="post"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
