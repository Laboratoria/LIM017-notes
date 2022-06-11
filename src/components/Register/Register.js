import './Register.css'


export function Register () {

    //aqui tengo fun

        return <div>
                <section><h2 className="titleMain">YUYARINAPAQ</h2></section>
                <section className="textContainer">
                    <h3 className="textRegister">Registro</h3>
                    <form>
                    <label for='nameUser'>Nombre de usuario<br></br>
                    <input type='text' id='createName' placeholder ='Ejm: usuario' name ='nameUser'></input>
                    </label><br></br>
                    <label for='inputEmail'>Email<br></br>
                    <input type='text' id='createEmail' placeholder ='usuario@example.com' name ='nameEmail'></input>
                    </label>
                    <p id='messageEmail'></p><br></br>
                    <label for='namePassword'>Contraseña<br></br>
                    <input type= 'password' id='createPassword' placeholder ='Mayor a 6 carácteres' name ='namePassword'></input>
                    </label>
                    </form>
                    <p id='messagePassword'></p>
                    <p id='messageVerificado'></p>
                    <button id='buttonUserRegister'> Crear Ususario</button>
                    <button id='buttonGoogle'> Iniciar con Google</button>
                    <button id='buttonBackHome'></button>
                </section>
            </div>;
}
