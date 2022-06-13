import './Register.css'
import { useState } from 'react';
import { useAuth } from '../../context/authContext';
 
export function Register () {
    const [user, setUser] = useState ({
        /* name: '',*/
        email: '',
        password: '',
    });

   const {signup} = useAuth ()

    const handleChange = ({target: {name, value}}) =>
        setUser({...user, [name]: value});

    const handleSubmit = e => {
        e.preventDefault();
        signup(user.email, user.password)
    }

        return <div>
            <section>
                <section><h2 className="titleMain">YUYARINAPAQ</h2></section>
                <section className="textContainer">
                    <h3 className="textRegister">Registro</h3>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre de usuario<br></br>
                    <input type='text' id='createName' placeholder ='Ejm: Eli Chil' name ='nameUser' onchange={handleChange} />
                    </label><br></br>
                    <label htmlFor='inputEmail'>Email<br></br>
                    <input type='email' id='createEmail' placeholder ='elichil@example.com' name ='email' onchange={handleChange} />
                    </label>
                    <p id='messageEmail'></p><br></br>
                    <label htmlFor='namePassword'>Contraseña<br></br>
                    <input type= 'password' id='createPassword' placeholder ='Mayor a 6 carácteres' name ='password' onchange={handleChange}/>
                    </label>
                    </form>
                    {/* <p id='messagePassword'></p> */}
                    <p id='messageVerificado'></p>
                    <button id='buttonUserRegister'> Crear Ususario</button>
                    <button id='buttonGoogle'> Iniciar con Google</button>
                    <button id='buttonBackHome'></button>
                </section>
            </section>
            </div>;
}
