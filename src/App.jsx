import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import md5 from "md5";

//context
import { UserContext } from "./context/userContext";
import { AuthContext } from "./context/authContext";

import "./assets/css/style.css";

//Layouts
import PublicLayout from "./layouts/publicLayout";
import PrivateLayout from "./layouts/privateLayout";
import AuthLayout from "./layouts/authLayout";

//Pages
import Error404 from "./pages/error404";
import Index from "./pages/index";
import Gallery from "./pages/gallery";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import IndexHome from "./pages/admin/index";
import EndPointJsonServer from "./pages/admin/duhan";
import EndPointSpoonacular from "./pages/admin/alkemy";
import OrdersPage from "./pages/admin/orders/index";
import ProductsPage from "./pages/admin/products/index";
import CustomersPage from "./pages/admin/customers/index";
import ReportsPage from "./pages/admin/reports/index";

function App() {

  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState("");
  //const userToken = useState(localStorage.getItem("token"));

  const setToken = (token) => {
    console.log("Set Token", token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
      console.log("token asignado: " + token);
    } else {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    if (localStorage.token !== undefined) {
      setAuthToken(localStorage.getItem("token"));
    } else {
      console.log("No logueado");
    }

    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        correo: decoded.email,
        name: decoded.email.split("@")[0]
      });
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<PublicLayout />}>
              <Route path="" element={<Index />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>

            <Route path="/administrator" element={<PrivateLayout />}>
              <Route path="" element={<IndexHome />} />
              <Route path="home" element={<EndPointJsonServer />} />
              <Route path="home2" element={<EndPointSpoonacular />} />
              <Route path="productos" element={<ProductsPage />} />
              <Route path="clientes" element={<CustomersPage />} />
              <Route path="ordenes" element={<OrdersPage />} />
              <Route path="reportes" element={<ReportsPage />} />
              {/* <Route path='vieditmenu/:_id' element={<VieditMenu />} /> */}

              {/* <Route path='cambiarpassword' element={<CambiarPassword/>}/> */}
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
              <Route path="" element={<LoginPage />} />
              <Route path="registro" element={<RegisterPage />} />
              <Route path="auth#about" element={<Index />} />
              {/* <Route path='errorauth' element={<ErrorAuth/>}/> */}
            </Route>

            <Route path='*' element={<Error404 />}/>

          </Routes>
        </Router>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
