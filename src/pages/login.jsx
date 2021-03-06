import React, { useState, useEffect } from "react";
import ButtonLoading from "../components/buttonLoading";
import jwt_decode from "jwt-decode";
import ImgLogo from "../assets/img/logo.png";
import { getUserByPost, getUserByGet } from "../API/login";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate, Navigate } from "react-router-dom";
import AlertSwal from "../components/alertSwal";

//import useFormData from "hooks/useFormData";

//import ImgAbout from "../assets/img/about.jpg";
// import dotenv from 'dotenv';

// dotenv.config();

// const baseURL = process.env.REACT_APP_API_URL_LOGIN

const LoginPage = () => {
  const [mostrarResetForm, setMostrarResetForm] = useState(false);

  if (localStorage.token !== undefined) {
     return <Navigate to="/administrator" />;
  } else {
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
            <div className="row" style={{ minHeight: "520px" }}>
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
  }
};

const FormularioLogin = ({ setMostrarResetForm }) => {
  const [usuario, setUsuario] = useState({ token: "" });

  const navigate = useNavigate();
  const { setToken } = useAuth();

  useEffect(() => {
    //console.log("Datos Inicio de Sesi??n", dataMutation);
    if (usuario) {
      if (usuario.token) {
        setToken(usuario.token);
        navigate("/administrator");
      }
    }
  }, [usuario, setToken, navigate]);

  const [datos, setDatos] = useState({
    user: "",
    pass: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  //FUNCIONA
  const fetchUsuario = async (user, pass) => {
    //Enviar la info a la API
    await getUserByPost(
      user,
      pass,
      (response) => {
        console.log(response.data.token);
        setUsuario({ ...usuario, token: response.data.token });
        console.log(jwt_decode(response.data.token));
        AlertSwal("success", "Autorizaci??n", response.data.token, "Cerrar", "");
        setLoading(false);
        navigate("/administrator");
      },
      (error) => {
        if (error.response) {
          //La solicitud se realiz?? y el servidor respondi?? con un c??digo de estado que cae fuera del rango de 2xx
          // console.log("Response data:", error.response.data);
          // console.log("Status", error.response.status);
          // console.log("Headers", error.response.headers);
          if (error.response.status === 401) {
            AlertSwal(
              "error",
              "??Ups!",
              "Usuario y/o contrase??a incorrecta",
              "Aceptar",
              ""
            );
          } else {
            AlertSwal(
              "error",
              "??Ups!",
              "Favor comunicate con el administrador e indicale el siguiente c??digo <<" +
                error.response.status +
                ">>",
              "Aceptar","","<a className='color-du' href='https://cors-anywhere.herokuapp.com/corsdemo' target='_blank'>Puedes probar nuevamente activando el siguiente proxy</a>"
              
            );
          }
        } else if (error.request) {
          /*
           * Se realiz?? la solicitud pero no se recibi?? respuesta, `error.request`
           * es una instancia de XMLHttpRequest en el navegador y una instancia
           * de http.ClientRequest en Node.js
           */
          console.log("Status: " + error.status, "Error: ", error.message);
          AlertSwal(
            "error",
            "??Ups!",
            "Se realiz?? la solicitud pero no se recibi?? respuesta, te presentamos m??s detalles a continuaci??n \n" +
              error.request,
            "Aceptar",
            ""
          );
        } else {
          // Algo sucedi?? al configurar la solicitud y provoc?? un error
          AlertSwal(
            "error",
            "??Ups!",
            "Algo sucedi?? al configurar la solicitud y provoc?? un error. \n" +
              error.message,
            "Aceptar",
            ""
          );
        }
        setLoading(false);
      }
    );
  };

  const submitForm = async (event) => {
    //console.log(event.preventDefault())
    setLoading(true);
    event.preventDefault();
    console.log("enviando datos..." + datos.user + " " + datos.pass);
    if(datos.user!== "" && datos.pass!== "")
    {
      fetchUsuario(datos.user, datos.pass);
    }
    else
    {
      AlertSwal("error", "??Ups...!", "Los campos de correo y contrase??a son requeridos ", "Cerrar", "");
    }
    setLoading(false);
  };

  return (
    <>
      <form
        name="formLogin"
        id="formLogin"
        className="text-white"
        onSubmit={submitForm}
      >
        <h3
          className="fw-normal mb-2 pb-2 text-white text-center text-uppercase"
          style={{ letterSpacing: "1px" }}
        >
          Iniciar sesi??n
          <br />
        </h3>

        <div className="mb-2">
          <label className="form-label text-uppercase" htmlFor="user">
            Email
          </label>
          <input
            type="email"
            id="user"
            name="user"
            defaultValue={""}
            className="form-control form-control-lg"
            onChange={handleInputChange}
            placeholder="Correo electronico"
          />
        </div>

        <div className="mb-2">
          <label className="form-label text-uppercase" htmlFor="pass">
            Contrase??a
          </label>
          <input
            type="password"
            id="pass"
            name="pass"
            defaultValue={""}
            className="form-control form-control-lg"
            onChange={handleInputChange}
            placeholder="Contrase??a"
          />
        </div>

        <div className="pt-1 mb-2">
          {/* <button
          className="btn btn-dark text-white btn-lg btn-block mt-2 mb-2 me-2"
          type="submit"
        >
          Ingresar
        </button> */}
          <ButtonLoading
            // disabled={Object.keys(formLogin).length === 0}
            disabled={loading}
            className="btn btn-dark text-white btn-lg btn-block mt-2 mb-2 me-2"
            loading={loading}
            text="Ingresar"
          />
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
          ??Se te olvid?? la contrase??a?
        </button>
      </form>
      <p className="mb-2 pb-lg-2 text-white">
        <span>??No tienes una cuenta? </span>
        <Link to="/auth/registro">Registrate aqu??</Link>
      </p>
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
        Formulario de recuperaci??n
      </h3>

      <div className="mb-2">
        <p>
          Ingresa t?? correo electr??nico y recibiras un email o una notificaci??n
          con los nuevos datos de ingreso al sistema.
        </p>
        <label
          className="form-label text-uppercase visually-hidden"
          htmlFor="email"
        >
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
          Iniciar sesi??n
        </button>
      </div>

      <p className="mb-2 pb-lg-2 text-white">
        ??No tienes una cuenta?{" "}
        <Link to="/auth/registro" className="text-du fw-bold">
          Registrate aqu??
        </Link>
      </p>
    </form>
  );
};

export default LoginPage;
