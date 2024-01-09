import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Menu from "./component/Menu";
import Simple from "./component/Simple";
import ComponentInt from "./component/CompoundInt";
import Bmi from "./component/BodyMi";
import LoanInt from "./component/LoanInt";

function App() {
  return (
      <BrowserRouter>
          <Menu/>
          <Routes>
                <Route path={`/`} element={<Simple/>} />
                <Route path={`/simple/interest`} element={<Simple/>} />
                <Route path={`/compound/interest`} element={<ComponentInt/>} />
                <Route path={`/Bmi`} element={<Bmi/>} />
                <Route path={`/loan/interest`} element={<LoanInt/>} />

          </Routes>
      </BrowserRouter>
  )
}
export default App

