import { React,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/connection.js";
import arcoIris from "../../Assets/arcoIris.png"
import Header from "../Header/Header.js";

const Home =() => {
 
  return (
    
    <div>
         <Header/>
      <div className="ContainerView">
     
        <img className="ContainerImage" src={arcoIris} ></img>
        <h1 className="StyleTitle">Lab Notes</h1>
</div>
    </div>
  );
}
export default Home;