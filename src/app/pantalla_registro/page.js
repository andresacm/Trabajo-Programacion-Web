'use client'

import styles from './page.module.css'
import Input from '../../components/Input/Input.jsx'
import {useState} from "react"
import { useRouter } from 'next/navigation'

const pantallaRegistro = () =>{

    const router = useRouter()

    function saveUser ()
    {
        usuario.id = numDoc
        usuario.correo = correo
        usuario.contraseña = pass
        usuario.nombres = nombres
        usuario.apellidos = apellidos
        usuario.tipoDoc = tipoDoc
        usuario.numDoc = numDoc
        usuario.rol = rol

        if(pass === pass2)
        {
            let myUserArray = JSON.parse(localStorage.getItem("userData")) || [];
            myUserArray.push(usuario)
            let userObjJSON = JSON.stringify(myUserArray)
            localStorage.setItem("userData", userObjJSON)
            router.push("/")
        }
        else
        {
            alert("Contrasena no coinciden")
        }

    }

const usuario = 
    {
        id: "",
        correo: "",
        contraseña: "",
        nombres: "",
        apellidos: "",
        tipoDoc: "",
        numDoc: "",
        rol: "",
        universidad: [],
        carrera: [],
        cursos: [],
        titulo: "",
        presentacion: "",
        profilePic:""
    }
    
    const [correo, setCorreo] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [tipoDoc, setTipoDoc] = useState("");
    const [numDoc, setNumDoc] = useState("");
    const [rol, setRol] = useState("");

    function correoChangeHandler(event)
    {
        setCorreo(event.target.value)
    }

    function passChangeHandler(event)
    {
        setPass(event.target.value)
    }

    function pass2ChangeHandler(event)
    {
        setPass2(event.target.value)
    }

    function nombresChangeHandler(event)
    {
        setNombres(event.target.value)
    }

    function apellidosChangeHandler(event)
    {
        setApellidos(event.target.value)
    }

    function tipoDocChangeHandler(event)
    {
        setTipoDoc(event.target.value)
    }

    function numDocChangeHandler(event)
    {
        setNumDoc(event.target.value)
    }

    function rolChangeHandler(event)
    {
        setRol(event.target.value)
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.h1_1}>Sistema de Citas para Atención a Estudiantes</h1>
            <h1 className={styles.h1_2}>Pagina de Registros</h1>
           <div className={styles.input1}>
                <Input id="correo" namew='Correo Electronico' value={correo} cambio={correoChangeHandler}></Input>
                <Input id= "pass" namew='Password' value={pass} onChange={(e)=> setPass(e.target.value)} cambio={passChangeHandler}></Input>
            </div>
            <div className={styles.input2}>
                <Input id="pass2" namew='Ingrese Password nuevamente' value={pass2} cambio={pass2ChangeHandler}></Input>
            </div>
            <h5 className={styles.h5_1}>Datos personales</h5>
            <div className={styles.input1}>
                <Input id="nombres" namew='Nombres' value={nombres} cambio={nombresChangeHandler}></Input>
                <Input id="apellidos" namew='Apellidos' value={apellidos} cambio={apellidosChangeHandler}></Input>
            </div>
            <div className={styles.input1}>
                <Input id="tipoDoc" namew='Tipo de Documento' value={tipoDoc} cambio={tipoDocChangeHandler}></Input>
                <Input id="numDoc" namew='Nro de Documento' value={numDoc} cambio={numDocChangeHandler}></Input>
            </div>
            <div className={styles.input1}>
                <Input id="rol" namew='Rol' value={rol} cambio={rolChangeHandler}></Input>
                
            </div>
            <div className={styles.divBtn}>
                <button onClick={saveUser} className={styles.registrar}>Registrar</button>
            </div>
            
            
        </div>

    )

}

export default pantallaRegistro;