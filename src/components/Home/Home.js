import {  useContext } from 'react';
/* import { context } from '../../context/authContext'; */
/* debemos importar authContext del archivo q tiene su mismo nombre  envez de context*/

export function Home () {
   const authContext = useContext(context)
   console.log(authContext);

    return <div>Estas en Home</div>;
}