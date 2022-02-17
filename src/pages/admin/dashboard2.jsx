import "../../assets/css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../components/breadCrumb";
import SignupForm from "../../components/formLogin";
import Card from "../../components/card";
import DataInfoMenu from "../../components/dataInfoMenu";
import { Formik, Field } from "formik";
import * as Yup from "yup"; 
import Search from "../../components/search";

// import Contact from "../components/contact";
// //import ImgAbout from "../assets/img/about.jpg";
// import ImgChef1 from "../assets/img/chefs/chefs-1.jpg";
// import ImgChef2 from "../assets/img/chefs/chefs-2.jpg";
// import ImgChef3 from "../assets/img/chefs/chefs-3.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import BookTable from "../components/bookTable";

// import ImgEventCustom from "../assets/img/event-custom.jpg";
// import ImgEventFiesta from "../assets/img/event-birthday.jpg";
// import ImgEventPrivate from "../assets/img/event-private.jpg";
// import Testimonials from "../components/testimonials";

const Dashboard = () => {
  let dataCrumbs = [
    {
      name: "Dashboard",
      icon: ["fa", "columns"],
      url: "./",
    },
  ];

  return (
    <>
      <main>
        <BreadCrumb listCrumbs={dataCrumbs} />
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

        <DataInfoMenu precio={15000} tiempoPreparacion={10} healtScore={12} />

        <div className="row g-3 align-items-center mb-4">
          <div className="col-auto">
            <label for="inputSearch" className="col-form-labe">
              Buscar
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputSearch"
              className="form-control rounded-pill"
              aria-describedby="textSearch"
            />
          </div>
          <div className="col-auto">
            <span id="textSearch" className="form-text">
              Debe tener más de dos(2) caracteres.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col m-3">
            <Search />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
