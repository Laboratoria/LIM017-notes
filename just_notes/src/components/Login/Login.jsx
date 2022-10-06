import styles from './Login.module.css';

export function Login () {
    return (
        <div className={styles.container}>
        <div className={styles.containerElements}>
        <img className={styles.img} src={require('../../img/logo.png')}/>
        <article className={styles.article}>
        <div className={styles.infoEmail}>
        <label>Correo electrónico</label><input type='text' id='email' className={styles.input} /><br/>
        </div>
        <div className={styles.infoPassword}>
        <label>Contraseña</label><input type='password' id='password' className={styles.input}/><br/>
        </div>
        <div className={styles.divBtnLogin}>
        <button className={styles.btnLogin}>Ingresar</button>
        </div>
        <div className={styles.infoForgotOrRegisterEmail}>
        <p className={styles.spanInfo}>
        ¿Te olvidaste de tu cuenta? <a href='#' className={styles.aForgotRegister}> Ingresa aquí</a><br/>
        </p>
        <p className={styles.spanInfo}>
        ¿Aún no te registras? <a href='#' className={styles.aForgotRegister}> Házlo aquí</a><br/>
        </p>
        <p className={styles.spaninfo}>
        O conéctate con:<br/>
        </p>
        <div className={styles.containerLogosGmailFacebook}>
        <img className={styles.img} src={require('../../img/gmail.png')} alt='Ingresa con Gmail'/>
        <img className={styles.img} src={require('../../img/facebook.png')} alt='Ingresa con Facebook'/>
        </div>
        </div>
        </article>
        </div>
        </div>
    )
}