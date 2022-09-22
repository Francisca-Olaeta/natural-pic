import Galeria from '../components/Galeria'
import { useState, useContext } from "react";
import MyContext from "../my_context";

export default function Favoritos() {

  const {fotos, setFotos, favoritos, setFavoritos} = useContext(MyContext);

  
  return (
    <>
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
          <Galeria />
        
        </div>
      </div>
    </>
  );
}
