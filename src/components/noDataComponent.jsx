import React from "react";
import ImgLogo from "../assets/img/logo.png";

const NoDataComponent = ({msn="No se encuentra información para visualizar"}) => {
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
                  {msn}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default NoDataComponent;