import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchPlato = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .min(2, "El campo de búsqueda debe contener 2 caracteres o más")
        .required("Campo requerido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="mb-3">
      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="input-group">
          <input
            id="search"
            type="text"
            placeholder="Buscador de platos"
            aria-label="Buscar plato"
            aria-describedby="btnGroupAddon"
            {...formik.getFieldProps("search")}
            className="form-control borderr-0 bg-du text-white"
          />
          <div
            className="input-group-text bg-dark text-white"
            id="btnGroupAddon"
          >
            <button
              type="submit"
              className="btn btn-outline-dark text-white align-middle"
            >
              <FontAwesomeIcon icon={["fa", "search"]} />
            </button>
          </div>
        </div>
      </div>
      {formik.touched.search && formik.errors.search ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{formik.errors.search}</strong> 
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      ) : null}
    </form>
  );
};

export default SearchPlato;
