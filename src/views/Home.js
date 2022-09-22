import Galeria from "../components/Galeria";
import MyContext from "../my_context";
import { useContext } from "react";

export default function Home() {
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria />
    </div>
  );
}
