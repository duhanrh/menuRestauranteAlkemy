import React, { useState } from "react";
import ImgLogo from "../assets/img/logo.png";
import { getUser } from '../API/login';
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
//import useFormData from "hooks/useFormData";

//import ImgAbout from "../assets/img/about.jpg";
// import dotenv from 'dotenv';

// dotenv.config();

// const baseURL = process.env.REACT_APP_API_URL_LOGIN

const LoginPage = () => {
  const [mostrarResetForm, setMostrarResetForm] = useState(false);


  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="col-10"
          style={{
            borderRadius: "2rem",
            background: "-webkit-linear-gradient(left, #ffb03b, black)",
          }}
        >
          <div className="row" style={{ minHeight:"520px"}}>
            <div
              className="bg-login align-items-center col-md-6 d-none d-md-block"
              style={{ borderRadius: "2rem 0 0 2rem" }}
            ></div>
            <div className="col-md-6">
              <div className="align-items-center mb-2 color-du">
                <img
                  src={ImgLogo}
                  className="d-block mx-auto"
                  height="120"
                  alt="Logo RB"
                />
              </div>
              {mostrarResetForm ? (
                <FormularioResetPassword
                  setMostrarResetForm={setMostrarResetForm}
                />
              ) : (
                <FormularioLogin setMostrarResetForm={setMostrarResetForm} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const FormularioLogin = ({ setMostrarResetForm }) => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const [datos, setDatos] = useState({
    user: "",
    pass: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

  const consultarUsuario = async (user,pass) => {
    getUser(user,pass);
};

  const submitForm = (event) => {
    //console.log(event.preventDefault())
    event.preventDefault()
        console.log('enviando datos...' + datos.user + ' ' + datos.pass)
       consultarUsuario(datos.user,datos.pass); 
  };


  return (
    <>
    <form className="text-white" onSubmit={submitForm} >
      <h3 className="fw-normal mb-2 pb-2 text-white text-center text-uppercase" style={{ letterSpacing: "1px" }}>
        Iniciar sesión<br />
      </h3>

      <div className="mb-2">
        <label className="form-label text-uppercase" htmlFor="user">
          Email
        </label>
        <input
          type="email"
          id="user"
          name="user"
          defaultValue={"challenge@alkemy.org"}
          className="form-control form-control-lg"
          onChange={handleInputChange}
          placeholder="Correo electronico"
        />
      </div>

      <div className="mb-2">
        <label className="form-label text-uppercase" htmlFor="pass">
          Contraseña
        </label>
        <input
          type="password"
          id="pass"
          name="pass"
          defaultValue={"react"}
          className="form-control form-control-lg"
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
      </div>

      <div className="pt-1 mb-2">
        <button
          className="btn btn-dark text-white btn-lg btn-block mt-2 mb-2 me-2"
          type="submit"
        >
          Ingresar
        </button>
        <Link
              to="/"
              className="btn btn-dark text-white btn-lg btn-block mt-2 mb-2 me-2"
            >
              Cancelar
            </Link>
      </div>

      <button
        className="btn btn-outline-warning mb-2"
        onClick={() => {
          setMostrarResetForm(true);
        }}
      >
        ¿Se te olvidó la contraseña?
      </button>

      <p className="mb-2 pb-lg-2 text-white">
        <span>¿No tienes una cuenta?{" "}</span>
        <Link
              to="/auth/registro"
            >
              Registrate aquí
            </Link>
      </p>
    </form>
    <ul>
                <li>{datos.user}</li>
                <li>{datos.pass}</li>
            </ul>
    </>
  );
};

const FormularioResetPassword = ({ setMostrarResetForm }) => {
  return (
    <form className="text-white">
      <h3
        className="fw-normal mb-2 pb-2 text-white text-center text-uppercase"
        style={{ letterSpacing: "1px" }}
      >
        Formulario de recuperación
      </h3>

      <div className="mb-2">
        <p>
          Ingresa tú correo electrónico y recibiras un email o una notificación
          con los nuevos datos de ingreso al sistema.
        </p>
        <label className="form-label text-uppercase visually-hidden" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={"challenge@alkemy.org"}
          className="form-control form-control-lg"
        />
      </div>

      <div className="pt-1 mb-2">
        <button
          className="btn btn-outline-dark text-white btn-lg btn-block mt-2 mb-2 me-2"
          type="button"
        >
          Resetear clave
        </button>

        <button
        className="btn btn-outline-warning text-white btn-lg btn-block mt-2 mb-2"
        onClick={() => {
          setMostrarResetForm(false);
        }}
      >
       Iniciar sesión   
      </button>
      </div>
      
      <p className="mb-2 pb-lg-2 text-white">
        ¿No tienes una cuenta?{" "}
        {/* <a href="/auth/registro" className="text-du fw-bold">
          Registrate aquí
        </a> */}
        <Link
              to="/auth/registro"
              className="text-du fw-bold"
            >
              Registrate aquí
            </Link>

      </p>
    </form>
  );
};

export default LoginPage;
