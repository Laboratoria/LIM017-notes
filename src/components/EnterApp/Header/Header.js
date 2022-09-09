import { React } from "react";
import { Link } from "react-router-dom";
import  back  from "../../Assets/back.png"
import "./Style.css"

const Header =() => {
  return (
    <header>
        <ul>  
          <li>
            <p className="styleHeaderTitle">Lab Notes</p>
          </li> 
          <li className="styleLinkBack">
          <Link to="/" className="active">Salir</Link>
          </li>
        </ul>
    </header>
  );
}
export default Header;