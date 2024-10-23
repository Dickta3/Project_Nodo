import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormularioPage } from "./pages/formulario";
import { NotFound } from "./pages/404";
import { Home } from "./pages/Home/";
import { FetchingData } from "./components/DataList/dataList";

{
  /*Aqui se mantienen las rutas de toda la aplicacion*/
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="formulario"
          element={<FormularioPage></FormularioPage>}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="data" element={<FetchingData/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
