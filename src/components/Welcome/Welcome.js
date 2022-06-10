/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import logoWelcome from '../../images/logoWelcome.png';
import './Welcome.css'

export function Welcome () {
    return <div>
        <h1>YUYARINAPAQ</h1>
        <Link to="/register">Ingresar</Link>
        <img src={logoWelcome} className="logo-welcome" />
    </div>;
}
/*  const getInto = () => {
      alert("Ingresa")
   }
    document.getElementById("btnGetInto").addEventListener("click",getInto) */
    