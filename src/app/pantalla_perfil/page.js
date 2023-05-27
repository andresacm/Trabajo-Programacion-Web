'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useRouter } from 'next/navigation'


const pantallaPerfil = () =>{

    const router = useRouter()

    function handleOnClick()
    {
        if(logInUser.rol == "Docente")
        {
            router.push("/pantalla_principal_docente")
        }
        else
        {
            router.push("/pantalla_principal_estudiante")
        }
    }

    let logInUser = JSON.parse(localStorage.getItem("logInUser"));

    const items = JSON.parse(localStorage.getItem("userData"));

    function reeplazarItem()
    {
        for (let i = 0; i < items.length; i++)
        {
            if (logInUser.correo == items[i].correo)
            {
                if (nombres != "")
                {
                    items[i].nombres = nombres;
                }

                if (apellidos != "")
                {
                    items[i].apellidos = apellidos;
                }

                if (tipoDoc != "")
                {
                    items[i].tipoDoc = tipoDoc;
                }

                if (rol != "")
                {
                    items[i].rol = rol;
                }

                if (numDoc != "")
                {
                    items[i].numDoc = numDoc;
                }

                if (correo != "")
                {
                    items[i].correo = correo;
                }

                if (pass != "")
                {
                    if (pass == items[i].contraseña && pass2 == pass3)
                    {
                        items[i].contraseña = pass2
                    }

                    else
                    {
                        if (pass != items[i].contraseña)
                        {
                            alert("contrasena incorrecta")
                        }
    
                        if (pass2 != pass3)
                        {
                            alert("Error en nueva contrasena")
                        }
                    }
                }

                if (universidad != "")
                {
                    items[i].universidad.push(universidad);
                }

                if (curso != "")
                {
                    items[i].cursos.push(curso);
                }

                if (carrera != "")
                {
                    items[i].carrera.push(carrera);
                }

                if (titulo != "")
                {
                    items[i].titulo = titulo;
                }

                if (presentacion != "")
                {
                    items[i].presentacion = presentacion;
                }

                if (profilePic != "")
                {
                    items[i].profilePic = profilePic;
                    router.push("/pantalla_perfil")
                }

                logInUser = items[i];

                let userLogInUsuarioJSON = JSON.stringify(logInUser)
                let itemsJSON = JSON.stringify(items) 

                localStorage.removeItem("userData");
                localStorage.setItem("userData",itemsJSON)
                localStorage.removeItem("logInUser");
                localStorage.setItem("logInUser",userLogInUsuarioJSON)
                
            }
        }
    }

      const [correo, setCorreo] = useState("");
      const [pass, setPass] = useState("");
      const [pass2, setPass2] = useState("");
      const [pass3, setPass3] = useState("");
      const [nombres, setNombres] = useState("");
      const [apellidos, setApellidos] = useState("");
      const [tipoDoc, setTipoDoc] = useState("");
      const [numDoc, setNumDoc] = useState("");
      const [rol, setRol] = useState("");
      const [universidad, setUniversidad] = useState("");
      const [curso, setCurso] = useState("");
      const [carrera, setCarrera] = useState("");
      const [titulo, setTitulo] = useState("");
      const [presentacion, setPresentacion] = useState("");
      const [profilePic, setProfilePic] = useState("");

  
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

      function pass3ChangeHandler(event)
      {
          setPass3(event.target.value)
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

      function universidadChangeHandler(event)
      {
          setUniversidad(event.target.value)
      }

      function cursoChangeHandler(event)
      {
          setCurso(event.target.value)
      }

      function carreraChangeHandler(event)
      {
          setCarrera(event.target.value)
      }

      function tituloChangeHandler(event)
      {
          setTitulo(event.target.value)
      }

      function presentacionChangeHandler(event)
      {
          setPresentacion(event.target.value)
      }

      function profilePicChangeHandler(event)
      {
          setProfilePic(event.target.value)
      }


    const [topBarIsVisible, setTopBarIsVisible] = useState(true);

    function swapTopBar()
    {
        setTopBarIsVisible(!topBarIsVisible)
    }

    let leftBarContent

    if (topBarIsVisible)
    {
        leftBarContent = <LeftBar/>
    }

    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                
                <div className={styles.contenido}>
                    <div className={styles.containerTop}>
                        <div className={styles.containerTitulo}>
                            <h1 className={styles.titulo}>Mi Perfil</h1>
                        </div>
                        <div className={styles.containerBoton}>
                            <Button variant="dark" className= {styles.boton} onClick={handleOnClick}>Cancelar</Button>
                        </div>    
                        <div className={styles.containerBoton}>
                            <Button variant="dark" className= {styles.boton1} onClick={reeplazarItem}>Guardar</Button>
                        </div>
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                        <h2 className={styles.titulo2}>Informacion Personal</h2>
                    </div>
                    <div className={styles.infoPersonal}>
                        <div className={styles.inputs}>
                            <div className={styles.input1}>
                                <Input namew='Nombres' cambio={nombresChangeHandler}></Input>
                                <Input namew='Apellidos'cambio={apellidosChangeHandler}></Input>
                                <Input namew='Tipo de Documento' cambio={tipoDocChangeHandler}></Input>
                            </div>
                            <div className={styles.input1}>
                                <Input namew='Rol' cambio={rolChangeHandler}></Input>
                                <Input namew='Numero' cambio={numDocChangeHandler}></Input>
                            </div>
                        </div>
                        <div className={styles.fotoPerfil}>
                            <img style={{height:"60%", width:"60%"}} src={logInUser.profilePic}></img>
                        </div>
                    </div>
                    
                    
                    <Tabs className={styles.letra}
                    defaultActiveKey="datos_usuario"
                    id="uncontrolled-tab-example"
                    
                    >
                    <Tab className={styles.letra} eventKey="datos_usuario" title="Datos de usuario">
                    <>
                        <div className={styles.DataUsuario}>
                            <Input namew='Usuario' cambio={correoChangeHandler}></Input>
                        </div>
                        <div className={styles.DataUsuario}>
                            <Input namew='Constrasena Actual' cambio={passChangeHandler}></Input>
                            <Input namew='Nueva Contrasena' cambio={pass2ChangeHandler}></Input>
                            <Input namew='Repetir Contrasena'cambio={pass3ChangeHandler}></Input>
                        </div>
                    </>
                    </Tab>
                    <Tab className={styles.letra} eventKey="universidad" title="Universidad">
                        <>
                        <div className={styles.DataUsuario}>
                        <Input namew='Universidad' cambio={universidadChangeHandler}></Input>
                        <Input namew='Agregar Curso' cambio={cursoChangeHandler}></Input>
                        </div>
                        <div className={styles.DataUsuario}>
                        <Input namew='Carrera' cambio={carreraChangeHandler}></Input>
                        </div>
                        </>
                    </Tab>
                    <Tab className={styles.letra} eventKey="presentacion" title="Presentacion">
                    <>
                    <div className={styles.DataUsuario}>
                        <Input namew='Titulo' cambio={tituloChangeHandler}></Input>
                    </div>
                    <div className={styles.DataUsuario}>
                        <Input namew='Presentacion' cambio={presentacionChangeHandler}></Input>
                    </div>
                    </>
                    </Tab>
                    <Tab className={styles.letra} eventKey="profilePic" title="Foto de Perfil">
                    <div className={styles.DataUsuario}>
                        <Input namew='URL' cambio={profilePicChangeHandler}></Input>
                    </div>
                    </Tab>
                    </Tabs>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;