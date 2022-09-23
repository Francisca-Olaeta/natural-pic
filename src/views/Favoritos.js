import Galeria from '../components/Galeria'
import { useState, useContext } from "react";
import MyContext from "../my_context";
import Heart from '../components/Heart';

export default function Favoritos() {
const {fotos, setFotos} = useContext(MyContext);

const quitarDeFavoritos = (id) => {
  const index = fotos.findIndex((f) => f.id === id);
  fotos[index].liked = !fotos[index].liked
  setFotos([...fotos]);
  }
  
  return (
    <>
      <div>
        <h1 className="title">Fotos favoritas</h1>
        <div className="p-5 galeria grid-columns-5">
          {fotos.filter((f)=>f.liked).map((f)=>(
            <div className='card border-0 hvr-grow' key={f.id}>
              <img className='card-img'
              src={f.src}
              />
              <div className='card-img-overlay card-container-main' onClick={()=>quitarDeFavoritos(f.id)}>
                <div className="heart">
                  <Heart filled={f.liked} />
                </div>
                <div className="card-container">
                  <h5 className="card-title">{f.photographer}</h5>
                  <p className="card-text">{f.alt}</p>
                </div>
              </div>

            </div>
          ))}
        
        </div>
      </div>
    </>
  );
}
