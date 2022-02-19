import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "../../../components/breadcrumb";
import DataTableDu from "../../../components/dataTableDu";
import "../../../assets/css/dashboard.css";

const CustomersPage = () => {
  let dataCrumbs = [
    {
      name: "Ordenes",
      icon: ["fa", "book"],
      url: "./",
    },
    {
      name: "Listar",
      icon: ["fa", "list"],
      url: "",
    },
  ];

  return (
    <>
      <main>
        <BreadCrumb listCrumbs={dataCrumbs} />
        {/*==================================TITULO==================================*/}
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="color-du">
            {" "}
            <FontAwesomeIcon icon={["fa", "book"]} /> Pedidos
          </h2>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-warning">
                Nuevo
              </button>
              <button type="button" className="btn btn-sm btn-outline-warning">
                Exportar
              </button>
            </div>
          </div>
        </div>
        {/*==================================LISTA==================================*/}
        <div>
          <DataTableDu />
        </div>
      </main>
    </>
  );
};

export default CustomersPage;
