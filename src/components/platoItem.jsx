import React, { useEffect, useState} from "react";

const PlatoItem = ({
  data,
  agregar,
  editar,
  eliminar,
  edicion = false
}) => {

  const [showDetalles, setShowDetalles] = useState(false);

  const show = () => {
    setShowDetalles(!showDetalles);
    console.log(showDetalles)
  }

  useEffect(() => {
      console.log("cambio");
  }, [showDetalles]);

  return (
    <div className="card mb-4 box-shadow">
      <img
        className="card-img-top"
        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        alt="Thumbnail [100%x225]"
        style={{ height: "225px", width: "100%", display: "block" }}
        src={
          data.image
            ? data.image
            : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17ec75f74a4%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17ec75f74a4%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9453125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        }
        data-holder-rendered="true"
      />

      <div className="card-header bg-du text-white text-uppercase">
        {data.title}
      </div>

      <div className="card-body">
        {
          showDetalles && (
            <div className="card-text">
              {" "}
              <p
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: data.summary }}
              />{" "}
            </div>
          )
          //dangerouslySetInnerHTML, ayuda con los escapes que tiene el texto
        }

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Receta: {data.vegan === true ? "vegana" : "no vegana"}
          </li>
          <li className="list-group-item">
            Costo: ${data.pricePerServing.toFixed(2)}
          </li>
          <li className="list-group-item">
            Health Score: {data.healthScore.toFixed(2)}
          </li>
          <li className="list-group-item">
            Tiempo preparación: {data.readyInMinutes.toFixed(0)} min
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="btn-group">
            {edicion ? (
              <>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => eliminar(data.id)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => show()}
                >
                  {showDetalles ? <><span className="text-danger">-</span> Detalles</>:<><span className="text-success">+</span> Detalles</>}
                </button>
              </>
            ) : (
              <button
                className="btn btn-outline-dark"
                onClick={() => agregar(data.id)}
              >
                Agregar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatoItem;