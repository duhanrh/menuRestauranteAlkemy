
import React, { useReducer, useState, useEffect } from "react";
import { ACCIONES } from "../../actions/menuAction";
import BreadCrumb from "../../components/breadCrumb";
import { initialState, menuReducer } from "../../reducers/menuReducer";
import PlatoItem from "../../components/platoItem";
import Loading from "../../components/loading";
import { useFormik } from "formik";
import * as Yup from "yup";
import NoDataComponent from "../../components/noDataComponent";
import AlertSwal from "../../components/alertSwal";
import { getRecipesRandom, getRecipeLike } from "../../API/products2.js";
//import "../../assets/css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EndPointJsonServer = () => {

  let dataCrumbs = [
    {
      name: "Challenge",
      icon: ["fa", "home"],
      url: "./",
    },
    {
      name: "JSON Server",
      icon: ["fa", "columns"],
      url: "",
    },
    
  ];

  const [showMenu, setShowMenu] = useState(true);
  const [activeMenu, setActiveMenu] = useState(true);

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const {
    platos,
    menu,
    platosVeganos,
    platosNoVeganos,
    acumulativoPrecioMenu,
    acumulativoTiempoMenu,
    acumulativoHealtScoreMenu,
  } = state;

  const [loading, setLoading] = useState(false);

  const agregar = (id) => {
    dispatch({ type: ACCIONES.AGREGAR, payload: id });
  };

  const eliminar = (id) => {
    dispatch({ type: ACCIONES.ELIMINAR_ITEM, payload: id });
  };

  const limpiar = () => {
    dispatch({ type: ACCIONES.LIMPIAR_MENU });
  };

  const fetchRecetasAleatorias = async () => {
    setLoading(true);
    await getRecipesRandom(
      (response) => {
        //console.log("Respuesta", response.data);
        state.platos = response.data;
        //console.log("Recetas:", platos);
        AlertSwal(
          "success",
          "Carga exitosa",
          "Se han cargado algunas recetas de forma aleatoria",
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

  const fetchRecetasLike = async (field, search) => {
    setLoading(true);
    await getRecipeLike(
      field,
      search,
      (response) => {
        //console.log("response like", response.data);
        if (response.data.length > 0) {
          state.platos = response.data;
          AlertSwal(
            "success",
            "Carga exitosa",
            "Se han listado las recetas de acuerdo a la información indicada en los parametros de filtro y consulta",
            "Cerrar",
            ""
          );
        } else {
          AlertSwal(
            "warning",
            "Notificación",
            "No hay recetas que coincidan con el criterio de búsqueda",
            "Cerrar",
            ""
          );
        }
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

  const clickTag = (trueFalse) => {
    setShowMenu(!trueFalse);
    setActiveMenu(!trueFalse);
    console.log(activeMenu ? "Estas en recetas" : "Estas en menú");
  };

  const FilasPlatos = () => {
    return (
      <>
        {state && state.platos.length > 0 && <h3>PLATOS DISPONIBLES</h3>}
        <div className="row">
          {state && state.platos.length > 0 ? (
            state.platos.map((product) => (
              <div className="col-md-4">
                <PlatoItem key={product.id} data={product} agregar={agregar} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <NoDataComponent title="Sin data para visualizar los platos disponibles" />
            </div>
          )}
        </div>
      </>
    );
  };

  const SearchPlatos = () => {
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
        //alert(JSON.stringify(values, null, 2));
        //console.log("Estoy consultando platos vengo de search component",values);
        fetchRecetasLike("title", values.search);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            id="search"
            name="search"
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
        {formik.touched.search && formik.errors.search ? (
          <strong>{formik.errors.search}</strong>
        ) : null}
      </form>
    );
  };

  const FiltroPlatos = () => {
    return (
      <>
        <div class="row mb-3">
          <div class="col-auto align-middle">
            <span className="align-middle fs-3">Filtro: </span>
          </div>
          <div class="col align-middle">
            <div class="form-check ">
              <input
                name="tipoReceta"
                id="vegana"
                type="radio"
                class="form-check-input fs-3"
                onClick={() => fetchRecetasLike("vegan", true)}
              />
              <label class="form-check-label fs-3" for="true">
                Veganas
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input
                name="tipoReceta"
                id="novegana"
                type="radio"
                class="form-check-input fs-3"
                onClick = {() => fetchRecetasLike("vegan", false)}
              />
              <label class="form-check-label fs-3" for="false">
                No veganas
              </label>
            </div>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    console.log("Cambio informacion en los platos");
  }, [state.platos]);

  return (
    <>
      <main>
        {/*==================================MIGAS DE PAN==================================*/}
        <BreadCrumb listCrumbs={dataCrumbs} />
        {/*==================================TITULO PAGINA==================================*/}
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="color-du">
            {" "}
            <FontAwesomeIcon icon={["fa", "columns"]} /> Menu
          </h2>
        </div>
        {/*==================================COMPONENTE MENU==================================*/}
        <div className="mt-4">
      {/*==================================BUTTON GROUPS==================================*/}
      <div className="btn-group mb-3">
        <button
          className={activeMenu ? "btn btn-outline-dark" : "btn btn-dark"}
          disabled={activeMenu ? false : true}
          onClick={() => clickTag(true)}
        >
          Agregar platos
        </button>
        <button
          className={activeMenu ? "btn btn-dark" : "btn btn-outline-dark"}
          disabled={activeMenu ? true : false}
          onClick={() => clickTag(false)}
        >
          Ver menú
        </button>
      </div>
      {/*==================================BUSCAR Y FILTRAR==================================*/}
      {showMenu===false &&
      <div className="row">
        <div className="col-md-6">
          <SearchPlatos />
        </div>
        <div className="col-md-6">
          <FiltroPlatos />
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-outline-warning mb-2"
            disabled={loading ? true : false}
            onClick={() => {
              fetchRecetasAleatorias();
            }}
          >
            Cargar recetas aleatorias
          </button>
        </div>
      </div>
}
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
                  ? (
                      state.acumulativoTiempoMenu /
                      (state.platosNoVeganos + platosVeganos)
                    ).toFixed(2)
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
                  ? (
                      state.acumulativoHealtScoreMenu /
                      (state.platosNoVeganos + platosVeganos)
                    ).toFixed(2)
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
                  <NoDataComponent title="No se ha construido la carta de opciones del menú" />
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
                <FilasPlatos />
              </>
            )}
          </div>
        )}
      </div>
        </div>
      </main>
    </>
  );
};

export default EndPointJsonServer;