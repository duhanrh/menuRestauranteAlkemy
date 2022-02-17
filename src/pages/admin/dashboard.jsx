import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../components/breadCrumb";
import MenuComponent from "../../components/menu";
//import "../../assets/css/dashboard.css";


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
          <MenuComponent /> 
        </div>
      </main>
    </>
  );
};

export default Dashboard;