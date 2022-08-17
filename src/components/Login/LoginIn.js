import React from 'react'
import {Link} from 'react-router-dom'
//import '../assets/css/Welcome.css'

export const Login = ()=>{
    return(
        <div>
            <Link to='/Mesero'>Mesero</Link> <br></br>
            <Link to='/Chef'>Chef</Link> <br></br>
            <Link to='/Admin'>Admin</Link>
        </div>
    )
}
export default Login;