'use client'

import styles from './page.module.css'
import Input from '../../components/Input/Input.jsx'
import { useRouter } from 'next/navigation'

const olvideContrasenna = () =>{

    const router = useRouter();

    return(

        <div className={styles.container}>
            <h1 className={styles.titulo}>Sistema de citas para antecion a estudiantes</h1>
            <p className={styles.parrafo}>Escribir correo electronico para poder enviar las indicaciones a seguir para proporcionarle una nueva contraseña</p>
            <Input namew = "Usuario o Correo"></Input>
            <button className={styles.enviar} onClick={router.push('/')}> Enviar </button>
        </div>
        
    )


}

export default olvideContrasenna