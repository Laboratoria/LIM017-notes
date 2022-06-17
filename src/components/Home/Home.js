/* import {  useContext } from 'react'; */
/* import { context } from '../../context/authContext'; */
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
/* debemos importar authContext del archivo q tiene su mismo nombre  envez de context*/

export function Home () {

    const {user, logout, loading} = useAuth()
    console.log(user);
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/");
    }
    if (loading) return <h2>Actualizando</h2>
   /* const authContext = useContext(context)
   console.log(authContext); */

    return <div>
            <section>
            <h2>Estas en Home {user.email}</h2>
            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
            </section>
        </div>;
}