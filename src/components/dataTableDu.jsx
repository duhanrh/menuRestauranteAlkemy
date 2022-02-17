import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataTableDu = () => {

  const navigate = useNavigate();
  const clearInputSearch = () => {

  };

  return (
    <>
      <div className="row mb-4">
        <div className="col-md-9">
          <div className="input-group me-5 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Dato a buscar"
              aria-label="dato a buscar"
              aria-describedby="btnGroupSearch"
            />
            <div className="input-group-text btn btn-dark" id="btnGroupSearch">
              X
            </div>
          </div>
        </div>
        <div className="col-md-3 justify-content-end mt-2">
          <div className="input-group">
            <div className="input-group-text" id="btnGroupAddon">
              Filas por pagina
            </div>
            <select
              className="form-control"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            >
              <option>10</option>
              <option>25</option>
              <option>100</option>
              <option>Todas</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-responsive mb-3">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="/#"
              tabindex="-1"
              aria-disabled="true"
            >
              Atras
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="/#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">
              Siguiente
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default DataTableDu;
