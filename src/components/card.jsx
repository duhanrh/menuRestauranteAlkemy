import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imagen, titulo, TorH="H", categoria, descripcion, agregar, buttons }) => {
  return (
    <div className="card mb-4 box-shadow">
      <img
        className="card-img-top"
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        alt="Thumbnail [100%x225]"
        style={{ height: "225px", width: "100%", display: "block" }}
        src={
          imagen
            ? imagen
            : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17ec75f74a4%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17ec75f74a4%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        }
        data-holder-rendered="true"
      />
      {(TorH ==="H") || (TorH ==="h") &&
        <div className="card-header bg-du text-white">{titulo}</div>
      }
      
      <div className="card-body">
      {(TorH ==="T") || (TorH ==="t") &&
        <h5 className="card-title">{titulo}</h5>
      } 
        <h6 className="card-subtitle mb-2 text-muted">{categoria}</h6>
        <p className="card-text">{descripcion}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
          <button onClick={() => agregar(agregar)}>Agregar</button>
            {buttons.map((item, i) =>
            item.visible &&
             (
              <button type="button" className="btn btn-sm btn-outline-secondary">
                <Link key={i} to={item.url} as={"/categoria/" + item.name} className="btn btn-sm">
                  {item.name}
                </Link>
                </button>
            )
          )}
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  );
};
export default Card;
