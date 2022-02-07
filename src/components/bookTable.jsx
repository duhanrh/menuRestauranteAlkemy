const BookTable = () => {

    return(
        <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>
              Reserva una <span>Mesa</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <form
            action="forms/book-a-table.php"
            method="post"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Tu nombre"
                  data-rule="minlen:5"
                  data-msg="Please enter at least 5 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Tu correo electrónico"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Tu teléfono"
                  data-rule="minlen:10"
                  data-msg="Please enter at least 10 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="date"
                  data-rule="minlen:10"
                  data-msg="Please enter at least 10 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  id="time"
                  data-rule="minlen:10"
                  data-msg="Please enter at least 10 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="number"
                  className="form-control"
                  name="people"
                  id="people"
                  placeholder="# de personas"
                  data-rule="minlen:1"
                  data-msg="Please enter at least 1 chars"
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Indicaciones"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Enviar reserva</button>
            </div>
          </form>
        </div>
      </section>
    );
};

export default BookTable;