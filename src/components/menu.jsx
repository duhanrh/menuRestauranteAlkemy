import React, { useReducer, useState, useEffect } from "react";
import { ACCIONES } from "../actions/menuAction";
import { initialState, menuReducer } from "../reducers/menuReducer";
import MenuItem from "./menuItem";
import PlatoItem from "./platoItem";
import Card from "./card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./loading";
//import DataInfoMenu from "./dataInfoMenu";
import { useFormik } from "formik";
import { Formik, Field } from "formik";
import * as Yup from "yup";
//import SearchPlato from "./searchPlato";
import NoDataComponent from "./noDataComponent";
import AlertSwal from "./alertSwal";
import { getRecipesRandom, getRecipeLike } from "../API/products2.js";
//import "../../assets/css/dashboard.css";

const MenuComponent = () => {

  const [showMenu, setShowMenu] = useState(true)
  const [activeMenu, setActiveMenu] = useState(true)

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const { platos, menu, platosVeganos, platosNoVeganos, acumulativoPrecioMenu, acumulativoTiempoMenu, acumulativoHealtScoreMenu } = state;

  const [loading, setLoading] = useState(false);

  const agregar = (id) => {
    //console.log(id);
    dispatch({ type: ACCIONES.AGREGAR, payload: id });
  };

  const eliminar = (id) => {
    //console.log(id, all);
    dispatch({ type: ACCIONES.ELIMINAR_ITEM, payload: id });
  };

  const limpiar = () => {
    dispatch({ type: ACCIONES.LIMPIAR_MENU });
  };

  const buscar = (search) => {
    console.log("Soyd duhan",search);
    //dispatch({ type: ACCIONES.AGREGAR, payload: id });
  };

  const fetchRecetasAleatorias = async () => {
    setLoading(true);
    await getRecipesRandom(
      (response) => {
        console.log("Respuesta", response.data);
        //platos(response.data);
        state.platos = response.data;
        console.log("Recetas:", platos);
        AlertSwal(
          "success",
          "Carga exitosa",
          "Se han cargado algunos platos aleatoriamente",
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

  const clickeo  = (trueFalse) => {
    setShowMenu(!trueFalse) 
    setActiveMenu(!trueFalse)
    console.log("acvtive",activeMenu)
  }

  return (
    <>
      {/*==================================BUTTON GROUPS==================================*/}
      <div className="btn-group mb-3">
        <button
          className={activeMenu ? "btn btn-outline-dark" : "btn btn-dark"}
          disabled={activeMenu ? false : true}
          onClick={() => clickeo(true)}
        >
          Agregar platos
        </button>
        <button
          className={activeMenu ? "btn btn-dark" : "btn btn-outline-dark"}
          disabled={activeMenu ? true : false}
          onClick={() => clickeo(false)}
        >
          Ver menú
        </button>
      </div>
      {/*==================================BUSCADOR==================================*/}
      <div className="row">
        <div className="col-md-12">
          <SearchPlato />
        </div>
      </div>
      {/*==================================INDICADORES==================================*/}
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
              <FontAwesomeIcon className="fs-1" icon={["fa", "seedling"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>{state.platosVeganos}</h5>
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
              <FontAwesomeIcon className="fs-1" icon={["fa", "utensils"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>{state.platosNoVeganos}</h5>
              <span className="fs-6 color-du fw-bold">Platos No Veganos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div id="acumulativoPrecioMenu" className="col-md-4 col-12 mb-2 ">
          <div className="d-flex align-items-center border border-dark rounded-3 p-2">
            <div
              className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center"
              style={{
                width: "70px !important",
                minWidth: "70px",
                height: "70px",
              }}
            >
              <FontAwesomeIcon className="fs-1" icon={["fa", "dollar-sign"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>{state.acumulativoPrecioMenu.toFixed(2)}</h5>
              <span className="fs-6 color-du fw-bold">Precio del menú</span>
            </div>
          </div>
        </div>
        <div id="promedioTiempoPreparacion" className="col-md-4 col-12 mb-2 ">
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
              <h5>
                {state.platosNoVeganos + platosVeganos > 0
                  ? (state.acumulativoTiempoMenu /
                    (state.platosNoVeganos + platosVeganos)).toFixed(2)
                  : "0.00"}
              </h5>
              <span className="fs-6 color-du fw-bold">
                Promedio preparación
              </span>
            </div>
          </div>
        </div>
        <div id="promedioHealtScore" className="col-md-4 col-12 mb-2 ">
          <div className="d-flex align-items-center border border-dark rounded-3 p-2">
            <div
              className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center"
              style={{
                width: "70px !important",
                minWidth: "70px",
                height: "70px",
              }}
            >
              <FontAwesomeIcon className="fs-1" icon={["fa", "tags"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>
                {state.platosNoVeganos + platosVeganos > 0
                  ? (state.acumulativoHealtScoreMenu /
                    (state.platosNoVeganos + platosVeganos)).toFixed(2)
                  : "0.00"}
              </h5>
              <span className="fs-6 color-du fw-bold">Promedio healthy</span>
            </div>
          </div>
        </div>
      </div>
      {/*==================================CUERPO==================================*/}
      <div>
        {showMenu ? (
          <>
            <div className="row">
              {state.platosNoVeganos + state.platosVeganos > 0 ? (
                <>
                  <div className="col-12 mb-2">
                    <button className="btn btn-warning" onClick={limpiar}>
                      Limpiar Menu
                    </button>
                  </div>
                  {/* {menu.map((item, index) => (
                    <MenuItem key={index} data={item} eliminar={eliminar} />
                  ))} */}

                  <div className="row">
                    {menu.map((item, index) => (
                      <div className="col-md-6">
                        <PlatoItem
                          key={index}
                          data={item}
                          eliminar={eliminar}
                          edicion={true}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="col-12">
                  <NoDataComponent msn="No se ha construido la carta de opciones del menú" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div id="recetasAleatorias">
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
                  Cargar recetas aleatorias
                </button>
                <div className="row">
                  {platos.map((product) => (
                    <div className="col-md-4">
                      <PlatoItem
                        key={product.id}
                        data={product}
                        agregar={agregar}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const SearchPlato = (...state) => {

  const [loading, setLoading] = useState(false);

  const fetchRecetasLike = async (field, search) => {
    setLoading(true);
    await getRecipeLike(field, search,
      (response) => {
        console.log("Respuesta", response.data);
        //platos(response.data);
        state.platos = response.data;
        console.log("Recetas:", state.platos);
        // AlertSwal(
        //   "success",
        //   "Carga exitosa",
        //   "Se ha cargado la información de acuerdo a tus parametros de consulta",
        //   "Cerrar",
        //   ""
        // );
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
  
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .min(2, "El campo de búsqueda debe contener 2 caracteres o más")
        .required("Campo requerido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("estoy en " , values)
      fetchRecetasLike("title","G");

    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mb-3">
      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="input-group">
          <input
            id="search"
            type="text"
            placeholder="Buscador de platos"
            aria-label="Buscar plato"
            aria-describedby="btnGroupAddon"
            {...formik.getFieldProps("search")}
            className="form-control borderr-0 bg-du text-white"
          />
          <div
            className="input-group-text bg-dark text-white"
            id="btnGroupAddon"
          >
            <button
              type="submit"
              className="btn btn-outline-dark text-white align-middle"
            >
              <FontAwesomeIcon icon={["fa", "search"]} />
            </button>
          </div>
        </div>
      </div>
      {formik.touched.search && formik.errors.search ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{formik.errors.search}</strong> 
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      ) : null}
      <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label">Password</label>
  </div>
  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>
    </form>
  );
};


export default MenuComponent;
