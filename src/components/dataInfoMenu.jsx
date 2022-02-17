import React from "react";
import "../assets/css/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataInfoMenu = ({ precio, tiempoPreparacion, healtScore }) => {
  return (
    <>
      <div className="row mb-2">
        
      <div className="col-md-4 col-12 mb-2 ">
          <div className="d-flex align-items-center border border-dark rounded-3 p-2">
            <div className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center" style={{width:"70px !important", minWidth:"70px", height:"70px"}}>
              <FontAwesomeIcon className="fs-1" icon={["fa", "dollar-sign"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>{precio}</h5>
              <span className="fs-6 color-du fw-bold">Precio menú</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mb-2 ">
          <div className="d-flex align-items-center border border-dark rounded-3 p-2">
          <div className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center" style={{width:"70px !important", minWidth:"70px", height:"70px"}}>
              <FontAwesomeIcon className="fs-1" icon={["fa", "clock"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>{tiempoPreparacion}</h5>
              <span className="fs-6 color-du fw-bold">Tiempo de preparación</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mb-2 ">
          <div className="d-flex align-items-center border border-dark rounded-3 p-2" style={{border:"1px solid #ffb03b"}}>
          <div className="flex-shrink-0 rounded-circle bg-du ms-2 p-3 text-white text-center" style={{width:"70px !important", minWidth:"70px", height:"70px"}}>
              <FontAwesomeIcon className="fs-1" icon={["fa", "tags"]} />
            </div>
            <div className="flex-grow-1 ms-3 me-3 text-end">
              <h5>{healtScore}</h5>
              <span className="fs-6 color-du fw-bold">Healt Score</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataInfoMenu;
