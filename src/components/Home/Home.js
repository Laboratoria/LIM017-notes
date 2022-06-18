/* import {  useContext } from 'react'; */
/* import { context } from '../../context/authContext'; */
/* import { useNavigate } from 'react-router-dom'; */
import { useAuth } from '../../context/authContext';

export function Home () {

    const {user, logout, loading} = useAuth()
    console.log(user);
    /* const navigate = useNavigate() */

    const handleLogout = async () => {
        await logout()
        /* navigate("/"); */
    }
    if (loading) return <h2>Actualizando</h2>

    return <div>
            <section>
            <h2>Estas en Home {user.email}</h2>
            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
            </section>
        </div>;
}