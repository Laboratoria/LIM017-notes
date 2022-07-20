import React from 'react';

import "./AddTitleComponent.css";

export function AddTitleComponent(){
    

    return (
        <div className="Container-WelcomeUser">
          <h1>
            Hola 👋 {localStorage.getItem("email")} Haz iniciado sesión 😊
          </h1>
        </div>     
    );
}

export default AddTitleComponent;