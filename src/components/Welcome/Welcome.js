/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import logoWelcome from '../../images/logoWelcome.png';
import './Welcome.css'

export function Welcome () {
    return <div>
        <section id="welcomePage">
        <h1 className="title-main">YUYARINAPAQ</h1>
        <img src={logoWelcome} className="logo-welcome" />
        <Link to="/register">Ingresar</Link>
        </section>
    </div>;
}
/*  const getInto = () => {
      alert("Ingresa")
   }
    document.getElementById("btnGetInto").addEventListener("click",getInto) */
    