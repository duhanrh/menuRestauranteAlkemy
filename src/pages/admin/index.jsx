import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb";
import NoDataComponent from "../../components/noDataComponent";
import { useUser } from "../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import "../../assets/css/dashboard.css";

const IndexHome = () => {
  const { userData } = useUser();

  let dataCrumbs = [
    {
      name: "Challenge",
      icon: ["fa", "home"],
      url: "./",
    },
  ];

  return (
    <>
      <main>
        {/*==================================MIGAS DE PAN==================================*/}
        <BreadCrumb listCrumbs={dataCrumbs} />
        <div className="mt-2">
          <NoDataComponent
            title="Bienvenido"
            body={
              "<p>Hola " +
              userData.name +
              ", he decidido hacer unos cambios de estructura debido a que los endpoint de spoonacular tiene unas limitaciones de peticiones, por lo que se puede probar el challenge de 2 maneras (Endpoint JsonServer y Endpoint Spoonacular), las cuales se muestran a continuación.</p>"
            }
          />
          <div className="btn-group mt-4">
            <Link to="./home" className="btn btn-outline-dark">
              Endpoint JsonServer
            </Link>
            <Link to="./home2" className="btn btn-outline-dark">
              Endpoint Spoonacular
            </Link>
            <a className="btn btn-outline-dark" href="https://restaurantealkemy.herokuapp.com/" target="_blank">
              Ver despliegue en heroku
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexHome;
