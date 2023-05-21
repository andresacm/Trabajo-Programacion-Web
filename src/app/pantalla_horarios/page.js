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
                        <h1 className={styles.titulo}>Mis Horarios</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                    <p className={styles.titulo2}>Agregar sus horarios de disponibilidad durante la semana</p>
                    </div>
                    <div className={styles.input1}>
                        <Input namew='Dia de semana'></Input>
                        <Input namew='Hora Inicio'></Input>
                        <Input namew='Hora Fin'></Input>
                        <Input namew='Enlace de Sesion'></Input>
                        <Button>Agregar</Button>
                    </div>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;