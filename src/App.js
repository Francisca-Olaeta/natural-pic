import "./styles.css";
import MyContext from "./my_context";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import React, { useEffect, useState } from "react";

export default function App() {
  const [fotos, setFotos] = useState([]);
  const [favoritos, setFavoritos] = useState(false);
  const sharedState = {fotos, setFotos, favoritos, setFavoritos};
  const endpoint = "/fotos.json";


//Consultar api
const getInfo = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  setFotos(data);
}

//Llamar a la función
useEffect(()=>{
  getInfo();
}, []);


  return (
    <div className="App">
      <MyContext.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>

      </MyContext.Provider>
    </div>
  );
}
