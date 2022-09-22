import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../my_context";
import { useContext } from "react";

export default function Galeria() {
  const {fotos, setFotos, favoritos, setFavoritos} = useContext(MyContext);


  return (
    <div className="galeria grid-columns-5 p-3">
    
      {fotos.photos?.map((f)=>(
        <div className="card text-bg-dark" key={f.id}>
            <img className="card-img" src={f.src.tiny} alt={f.alt} />
            <div className="card-img-overlay">
              <Heart
            
              // onClick={handleClick} 
              onClick= {onclick=() => setFavoritos(!favoritos)}
              value={favoritos}
              filled={favoritos ? true : false}
              
              />
              <h5 className="card-title">{f.photographer}</h5>
              <p className="card-text">{f.alt}</p>
            </div>
        </div>
      ))}
    </div>
  );
}
