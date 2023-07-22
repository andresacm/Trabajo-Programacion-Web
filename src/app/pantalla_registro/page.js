'use client'

import styles from './page.module.css'
import Input from '../../components/Input/Input.jsx'
import {useState} from "react"
import { useRouter } from 'next/navigation'
import DocentesApi from '../api/docentes.js'
import EstudiantesApi from '../api/estudiantes.js'

const pantallaRegistro = () =>{

    let persona = {
        id: '',
        email: '',
        password: '',
        nombres: '',
        apellidos: '',
        tipo_documento: '',
        dni: 0,
        rol: ''
    }

    const [datosPersona, setDatosPersona] = useState(persona)
    const [confirmContrasenna, setConfirmContrasenna] = useState("");

    const router = useRouter();

    const handleGuardarDocente = async (persona) =>{
        const resp = await DocentesApi.create(persona)
        const data = await resp.json()

        
    }

    const handleGuardarEstudiante = async (persona) =>{
        await EstudiantesApi.create(persona)
    }

    const saveUser = () =>{
        if (datosPersona.contrasenna == confirmContrasenna) {
            if (datosPersona.rol == "docente") {
                handleGuardarDocente(datosPersona)
            }else if(datosPersona.rol == "estudiante"){
                handleGuardarEstudiante(datosPersona)
            }
            router.push("/")
            alert("Cuenta creada exitosamente")
        }else{
            alert("No coninciden las contraseñas")
        }
    }
    
    return(
        <div className={styles.container}>
            <h1 className={styles.h1_1}>Sistema de Citas para Atención a Estudiantes</h1>
            <h1 className={styles.h1_2}>Pagina de Registros</h1>
           <div className={styles.input1}>
                <Input id="correo" namew='Correo Electronico' value={datosPersona.email} cambio={e => setDatosPersona({...datosPersona, email: e.target.value})}></Input>
                <Input id= "pass" namew='Password' value={datosPersona.password} cambio={e => setDatosPersona({...datosPersona, password: e.target.value})}></Input>
            </div>
            <div className={styles.input2}>
                <Input id="pass2" namew='Ingrese Password nuevamente' value={confirmContrasenna} cambio={e => setConfirmContrasenna(e.target.value)}></Input>
            </div>
            <h5 className={styles.h5_1}>Datos personales</h5>
            <div className={styles.input1}>
                <Input id="nombres" namew='Nombres' value={datosPersona.nombres} cambio={e => setDatosPersona({...datosPersona, nombres: e.target.value})}></Input>
                <Input id="apellidos" namew='Apellidos' value={datosPersona.apellidos} cambio={e => setDatosPersona({...datosPersona, apellidos: e.target.value})}></Input>
            </div>
            <div className={styles.input1}>
                <Input id="tipoDoc" namew='Tipo de Documento' value={datosPersona.tipoDoc} cambio={e => setDatosPersona({...datosPersona, tipo_documento: e.target.value})}></Input>
                <Input id="numDoc" namew='Nro de Documento' value={datosPersona.nroDoc} cambio={e => setDatosPersona({...datosPersona, dni: e.target.value})}></Input>
            </div>
            <div className={styles.input1}>
                <Input id="rol" namew='Rol' value={datosPersona.rol} cambio={e => setDatosPersona({...datosPersona, rol: e.target.value})}></Input>
                
            </div>
            <div className={styles.divBtn}>
                <button onClick={saveUser} className={styles.registrar}>Registrar</button>
            </div>
            
            
        </div>

    )

}

export default pantallaRegistro;