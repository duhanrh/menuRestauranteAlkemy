import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BreadCrumb = ({ listCrumbs }) => {
  return (
    <div
      className="alerta alerta-warning"
      role="alert"
      style={{ borderRadius: "1rem" }}
    >
      <values />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li key="admin" className="breadcrumb-item">
            <Link to="/administrator/">
              {" "}
              <FontAwesomeIcon icon={["fa", "home"]} /> Administración
            </Link>
          </li>
          <li key="mod" className="breadcrumb-item text-primary">
            <FontAwesomeIcon icon={["fa", "puzzle-piece"]} /> Modulo
          </li>
          {listCrumbs.map((item, i) =>
            i < listCrumbs.length - 1 ? (
              <li className="breadcrumb-item">
                <Link key={i} to={item.url} as={"/categoria/" + item.name}>
                  {" "}
                  <FontAwesomeIcon icon={item.icon} /> {item.name}
                </Link>
              </li>
            ) : (
              <li key={i} className="breadcrumb-item active" aria-current="page">
               {" "}
              <FontAwesomeIcon icon={item.icon} /> {item.name}
              </li>
            )
          )}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
