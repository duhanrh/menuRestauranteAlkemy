import ImgLogo from "../assets/img/logo.png";

const RegisterPage = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="col-11"
          style={{
            borderRadius: "2rem",
            background: "-webkit-linear-gradient(left, #ffb03b, black)",
          }}
        >
          <div className="row">
            <div
              className="bg-login align-items-center col-md-5 d-none d-md-block"
              style={{ borderRadius: "2rem 0 0 2rem" }}
            ></div>
            <div className="col-md-7">
              <div className="align-items-center mb-2 color-du">
                <img
                  src={ImgLogo}
                  className="d-block mx-auto"
                  height="120"
                  alt="Logo RB"
                />
              </div>
              <h3
                className="fw-normal mb-2 pb-2 text-white text-center text-uppercase"
                style={{ letterSpacing: "1px" }}
              >
                Formulario de registro
              </h3>
              <form className="text-white">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label className="form-label text-uppercase" for="nombre">
                      Nombre(s)
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      defaultValue={""}
                      placeholder=""
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label
                      className="form-label text-uppercase"
                      for="apellidos"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      defaultValue={""}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label text-uppercase" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={""}
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label className="form-label text-uppercase" for="telefono">
                      Telefono
                    </label>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      defaultValue={""}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label className="form-label text-uppercase" for="pass">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      defaultValue={""}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>

                <div className="row">
                <label className="form-label text-uppercase" for="gender">
                    Sexo
                  </label>
                  <div className="col-md-3">
                    <label className="radio inline">
                      <input type="radio" name="gender" value="Masculino"  />    {/* checked*/}
                      <span> Masculino </span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="radio inline">
                      <input type="radio" name="gender" value="Femenino" />
                      <span> Femenino</span>
                    </label>
                  </div>
                </div>

                <div className="pt-1 mb-2">
                  <button
                    className="btn btn-dark text-white btn-lg btn-block m-2"
                    type="button"
                  >
                    Registrar
                  </button>
                  <a
                    href="/"
                    className="btn btn-dark text-white btn-lg btn-block m-2"
                  >
                    Cancelar
                  </a>
                </div>

              </form>
              <p className="mb-2 pb-lg-2 text-white">
                  ¿Ya tienes una cuenta?{" "}
                  <a href="/auth/" className="text-du fw-bold">
                    Inicia Sesión
                  </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
