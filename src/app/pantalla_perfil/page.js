'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const pantallaPerfil = () =>{

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);
    const [contendoIsVisible, setContenidoIsVisible] = useState("DU");

    function swapTopBar()
    {
        setTopBarIsVisible(!topBarIsVisible)
    }

    function swapContenidoDU()
    {
        setContenidoIsVisible("DU")
    }

    function swapContenidoU()
    {
        setContenidoIsVisible("U")
    }

    function swapContenidoP()
    {
        setContenidoIsVisible("P")
    }

    let leftBarContent

    if (topBarIsVisible)
    {
        leftBarContent = <LeftBar/>
    }

    let contenido

    if (contendoIsVisible==="DU")
    {
        contenido = (
            <>
            <Input namew='Usuario'></Input>
            <br></br>
            <Input namew='Constrasena Actual'></Input>
            <Input namew='Nueva Contrasena'></Input>
            <Input namew='Repetir Contrasena'></Input>
            </>)           
        
    }
    else if(contendoIsVisible==="U")
    {
        contenido =(             
        <>
        <Input namew='Universidad'></Input>
        <Input namew='Carrera'></Input>
        <Input namew='Agregar Cursos'></Input>
        </>)         
    }
    else
    {
        contenido = (             
            <>
            <Input namew='Titulo'></Input>
            <Input namew='Presentacion'></Input>
            </>)        
    }

    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Mi Perfil</h1>
                        <Button>Guardar</Button>
                        
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                    <h2 className={styles.titulo2}>Informacion Personal</h2>
                    </div>
                    <div className={styles.input1}>
                        <Input namew='Nombres'></Input>
                        <Input namew='Apellidos'></Input>
                        <Input namew='Tipo de Documento'></Input>
                    </div>
                    <div className={styles.input1}>
                        <Input namew='Rol'></Input>
                        <Input namew='Numero'></Input>
                        
                    </div>
                    <ButtonGroup className="mb-2">
                        <Button onClick={swapContenidoDU}>Datos de Usuario</Button>
                        <Button onClick={swapContenidoU}>Universidad</Button>
                        <Button onClick={swapContenidoP}>Presentacion</Button>
                    </ButtonGroup>
                    <br></br>
                    {contenido}
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;