import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//context
import { UserContext } from "./context/userContext";
import { AuthContext } from "./context/authContext";

import "./assets/css/style.css";

//Layouts
import PublicLayout from "./layouts/publicLayout";
import PrivateLayout from "./layouts/privateLayout";
import AuthLayout from "./layouts/authLayout";

//Pages
import Index from "./pages/index";
import Gallery from "./pages/gallery";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Dashboard from "./pages/admin/dashboard";
import OrdersPage from "./pages/admin/orders/index";
import ProductsPage from "./pages/admin/products/index";
import CustomersPage from "./pages/admin/customers/index";
import ReportsPage from "./pages/admin/reports/index";

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState("");

  const setToken = (token) => {
    console.log("Set Token", token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        // _id: decoded._id,
        // nombre: decoded.nombre,
        // apellido: decoded.apellido,
        // identificacion: decoded.identificacion,
        correo: decoded.email,
        // rol: decoded.rol,
        // estado: decoded.estado,
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
              <Route path="" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="productos" element={<ProductsPage />} />
              <Route path="clientes" element={<CustomersPage />} />
              <Route path="ordenes" element={<OrdersPage />} />
              <Route path="reportes" element={<ReportsPage />} />
              {/* <Route path='vieditproyectos/:_id' element={<VieditProyectos />} /> */}

              {/* <Route path='cambiarpassword' element={<CambiarPassword/>}/> */}
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
              <Route path="" element={<LoginPage />} />
              <Route path="ingresar" element={<LoginPage />} />
              <Route path="registro" element={<RegisterPage />} />
              <Route path="auth#about" element={<Index />} />
              {/* <Route path='errorauth' element={<ErrorAuth/>}/> */}
            </Route>

            {/* <Route path='*' element={<Error404/>}/> */}
          </Routes>
        </Router>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
