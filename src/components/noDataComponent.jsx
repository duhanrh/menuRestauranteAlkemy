import React from "react";
import ImgLogo from "../assets/img/logo.png";

const NoDataComponent = ({title="", body=""}) => {
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
            <div className="col-md-9">
              <div style={{ borderRadius: "2rem" }}>
                <img
                  src={ImgLogo}
                  className="d-block mx-auto border bg-dark"
                  style={{ borderRadius: "50%" }}
                  height="130"
                  alt="Logo RB"
                />
                <h1 className="text-black">{title}</h1>
                 <div
                  className="text-black fs-3"
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default NoDataComponent;