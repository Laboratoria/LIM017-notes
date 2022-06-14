import './Login.css'
import { useState } from 'react';

export function Login () {

    /* const [user, setUser] = useState ({
        email: '',
        password: ''
    }) */

    return <div>
        <section>
            <h2 className="titleMain">YUYARINAPAQ</h2>
        </section>
        <section className='textContainer'>
            <h3>Login</h3>
            <label htmlFor='nameEmail'>Email<br></br>
            <input type='text' id='loginEmail' placeholder ='Ejm:usuario@example.com' name ='nameEmail' required />
            </label><br></br>
            <label htmlFor='password'>Contraseña<br></br>
            <input type= 'password' id='loginPassword' placeholder ='6 caracteres' name ='password' required></input><br></br>
            
            {/* <p id='messageEmail'></p> */}
            <p id='messagePassword'></p>
            <p id='errorCodeMessage'></p>
            </label>
            <button id='getInto'> Iniciar sesión</button>
            <button id='buttonGoogle'>Iniciar con Google</button>
            <div id='registerLink'>
            <p>¿No tienes cuenta? <a href='/register'><span className='link-span'><strong>Regístrate</strong></span></a></p>
            </div>
            <button id='buttonBackHome' className='buttonHome'></button>
        </section>
    </div>;
}