import React from 'react';//import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

//Layouts
import PublicLayout from './layouts/publicLayout';
//import PrivateLayout from './layouts/privateLayout';

//Pages
import Index from './pages/index';
//import Index2 from './pages/index2';

function App() {
  return (
    <Router>
          
            <Routes>

              <Route exact path='/' element={<PublicLayout/>}>
                <Route path='' element={< Index/>} />
              </Route>
                
              {/* <Route path='/admin' element={<PrivateLayout/>}>
                <Route path='' element={<Perfil/>}/>
                <Route path='usuarios' element={<Usuarios/>}/>
                <Route path='proyectos' element={<Proyectos/>}/>
                <Route path='vieditproyectos/:_id' element={<VieditProyectos />} />
                <Route path='inscripciones' element={<Inscripciones/>}/>
                <Route path='avances' element={<Avances/>}/>
                <Route path='observaciones/:_id' element={<Observaciones/>}/>
                <Route path='cambiarpassword' element={<CambiarPassword/>}/>
              </Route> */}

              {/* <Route path='/auth' element={<AuthLayout/>}>
                <Route path='' element={<Login/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='registro' element={<Registro/>}/>
                <Route path='errorauth' element={<ErrorAuth/>}/>
              </Route> */}

              {/* <Route path='*' element={<Error404/>}/> */}
                    
            </Routes>

          </Router>
  );
}

export default App;
