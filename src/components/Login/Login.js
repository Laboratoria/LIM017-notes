import { useState } from 'react';

export function Login () {

    const [user, setUser] = useState ({
        email: '',
        password: ''
    })

    return <div>
        <section>
            <h2>YUYARINAPAQ</h2>
        </section>
        <section class='text-container'>
            <h3>Login</h3>
            <label for='nameEmail'>Email<br></br>
            <input type='text' id='loginEmail' placeholder ='Ejm:usuario@example.com' name ='nameEmail' required></input><br></br>
            </label>
            <label for='namePassword'>Contraseña<br></br>
            <input type= 'password' id='loginPassword' placeholder ='6 caracteres' name ='namePassword' required></input><br></br>
            <p id='messageEmail'></p>
            <p id='messagePassword'></p>
            <p id='errorCodeMessage'></p>
            </label>
            <button id='getInto'> Iniciar sesión</button>
            <button id='buttonGoogle'>Iniciar con Google</button>
            <div id='register-link'>
            <p>¿No tienes cuenta? <a href='/register'><span class='link-span'><strong>Regístrate</strong></span></a></p>
            </div>
            <button id='buttonBackHome' class='buttonHome'></button>
        </section>
    </div>;
}