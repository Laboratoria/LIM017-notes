import './Login.css';

export function Login () {
    return (
        <div className='container'>
        <div className='container-elements'>
        <img className='img' src={require('../img/logo.png')}/>
        <article className='article'>
        <div className='information'>
        <label>Correo electrónico</label><input type='text' id='email' className='input' placeholder='Ingresa email'/><br/>
        <label>Contraseña</label><input type='text' id='password' className='input' placeholder='Ingresa clave'/><br/>
        <button className='btnLogin'>Ingresar</button>
        </div>
        </article>
        </div>
        </div>
    )
}