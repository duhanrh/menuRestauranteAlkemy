import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../components/breadCrumb";
import Loading from "../../components/loading";
import Card from "../../components/card";
import DataInfoMenu from "../../components/dataInfoMenu";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import SearchPlato from "../../components/searchPlato";
import AlertSwal from "../../components/alertSwal";
import { getRecipesRandom } from "../../API/products2.js";
//import "../../assets/css/dashboard.css";
import ImgLogo from "../../assets/img/logo.png";

const Dashboard = () => {
  let dataCrumbs = [
    {
      name: "Dashboard",
      icon: ["fa", "columns"],
      url: "./",
    },
  ];

  const [platosVeganos, setPlatosVeganos] = useState(0);
  const [platosNoVeganos, setPlatosNoVeganos] = useState(0);

  return (
    <>
      <main>
        <BreadCrumb listCrumbs={dataCrumbs} />

        {/* <HeaderDash /> */}

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="color-du">
            {" "}
            <FontAwesomeIcon icon={["fa", "columns"]} /> Menu
          </h2>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>
        {/*==================================BUSCADOR==================================*/}
        <div className="row">
          <div className="col-md-6">
            <SearchPlato />
          </div>
          <div className="col-md-6">
            <button className="btn btn-lg btn-warning bg-du text-white">
              Cargar platos aleatorios (21)
            </button>
          </div>
        </div>
        {/*==================================INDICADOR==================================*/}
        <div className="row mb-2">
          <div id="cantiPlatosVeganos" className="col-md-6 col-12 mb-2 ">
            <div className="d-flex align-items-center border border-dark rounded-3 p-2">
              <div
                className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center"
                style={{
                  width: "70px !important",
                  minWidth: "70px",
                  height: "70px",
                }}
              >
                <FontAwesomeIcon
                  className="fs-1"
                  icon={["fa", "dollar-sign"]}
                />
              </div>
              <div className="flex-grow-1 ms-3 me-3 text-end">
                <h5>{platosVeganos}</h5>
                <span className="fs-6 color-du fw-bold">Platos Veganos</span>
              </div>
            </div>
          </div>
          <div id="cantiPlatosNoVeganos" className="col-md-6 col-12 mb-2 ">
            <div className="d-flex align-items-center border border-dark rounded-3 p-2">
              <div
                className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center"
                style={{
                  width: "70px !important",
                  minWidth: "70px",
                  height: "70px",
                }}
              >
                <FontAwesomeIcon className="fs-1" icon={["fa", "clock"]} />
              </div>
              <div className="flex-grow-1 ms-3 me-3 text-end">
                <h5>{platosNoVeganos}</h5>
                <span className="fs-6 color-du fw-bold">Platos No Veganos</span>
              </div>
            </div>
          </div>
        </div>
        <Search setPlatosVeganos={setPlatosVeganos} setPlatosNoVeganos={setPlatosNoVeganos} duhan={10} />

        {/*=========================LLAMADO COMPONENTES INTERNOS=========================*/}
        <section>
          <div className="bg-success">
            {platosNoVeganos + platosVeganos > 0 ? (
              <menuComponent />
            ) : (
              <SinDatosComponent />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

{
  /*==================================CARGAR PLATOS==================================*/
}
const Search = ({setPlatosVeganos, setPlatosNoVeganos, duhan}) => {

  console.log("Duhan: ", duhan)
  console.log("platos veganos ", setPlatosVeganos)
  const [loading, setLoading] = useState(false);
  const [recetas, setRecetas] = useState([""]);

  const fetchRecetasAleatorias = async () => {
    setLoading(true);
    await getRecipesRandom(
      (response) => {
        console.log("Respuesta", response.data);
        setRecetas(response.data);
        console.log("Recetas:", recetas);
        AlertSwal(
          "success",
          "Carga exitosa",
          "Se han cargado 21 platos aleatoriamente",
          "Cerrar",
          ""
        );
        setLoading(false);
      },
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            AlertSwal("error", "¡Ups!", "Error consultando 401", "Aceptar", "");
          } else {
            AlertSwal(
              "error",
              "¡Ups!",
              "Favor comunicate con el administrador e indicale el siguiente código <<" +
                error.response.status +
                ">>",
              "Aceptar",
              ""
            );
          }
        } else if (error.request) {
          console.log("Status: " + error.status, "Error: ", error.message);
          AlertSwal(
            "error",
            "¡Ups!",
            "Se realizó la solicitud pero no se recibió respuesta, te presentamos más detalles a continuación \n" +
              error.request,
            "Aceptar",
            ""
          );
        } else {
          AlertSwal(
            "error",
            "¡Ups!",
            "Algo sucedió al configurar la solicitud y provocó un error. \n" +
              error.message,
            "Aceptar",
            ""
          );
        }
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    if (recetas.recipes || recetas) {
      console.log("Hay datos");
    } else {
      console.log("No hay datos");
    }
  }, [recetas]);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loading type="spin" color={"black"} />
        </div>
      ) : (
        <>
          <button
            className="btn btn-outline-warning mb-2"
            disabled={loading ? true : false}
            onClick={() => {
              fetchRecetasAleatorias();
            }}
          >
            Cargar recetas
          </button>
          <div className="row">
            {recetas.recipes &&
              recetas.recipes.map((receta, i) => (
                <div className="col-md-4">
                  <Card
                    imagen={receta.image}
                    titulo={receta}
                    TorH={"H"}
                    categoria={receta.vegan === true ? "Vegana" : "No vegana"}
                    descripcion={i}
                  />
                </div>
              ))}

            {/* {
  let dataCrumbs = [
    {
      name: "Clientes",
      icon: ["fa", "person-booth"],
      url: "./",
    },
    {
      name: "Listar",
      icon: ["fa", "list"],
      url: "",
    },
  ];
} */}

            {recetas &&
              recetas.map(
                (
                  receta,
                  i
                ) => (
                  <div className="col-md-4">
                    <Card
                      imagen={receta.image}
                      titulo={receta.title}
                      TorH={"H"}
                      categoria={receta.vegan === true ? "Vegana" : "No vegana"}
                      descripcion={i}
                      buttons={[
                        {
                          name: "Add",
                          visible:true,
                          url: "./plato/add/" + receta.id,
                        },
                        {
                          name: "Ver",
                          visible:false,
                          url: "./plato/vista/" + receta.id,
                        },
                        {
                          name: "Editar",
                          visible:false,
                          url: "./plato/editar/" + receta.id,
                        },
                      ]}
                    />
                    <button
                      onClick={() => {
                        console.log(duhan + 1);
                      }}
                    >
                      {" "}
                      add{" "}
                    </button>
                  </div>
                )
              )}
          </div>
        </>
      )}
    </div>
  );
};

const SinDatosComponent = () => {
  return (
    <div className="bg-login error-template">
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "2rem",
          }}
        >
          <div className="col-md-7">
            <div style={{ borderRadius: "2rem" }}>
              <img
                src={ImgLogo}
                className="d-block mx-auto border bg-dark"
                style={{ borderRadius: "50%" }}
                height="130"
                alt="Logo RB"
              />
              <h1 className="text-black">
                Aún no se ha construido una carta de menú
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//==================================MENU==================================
const MenuComponent = () => {
  return (
    <>
      <DataInfoMenu precio={15000} tiempoPreparacion={10} healtScore={12} />
      {/* <div className="row">
      <div className="col-md-4">
        <Card />
      </div>
      <div className="col-md-4">
        <Card />
      </div>
      <div className="col-md-4">
        <Card />
      </div>
    </div> */}
    </>
  );
};

export default Dashboard;
