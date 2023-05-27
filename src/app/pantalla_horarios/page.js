'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Citas from '@/components/Citas/Citas'


const pantallaPerfil = () =>{

    const cita = 
    {
        fecha : new Date(),
        link : "",
        status : "",
        profesor : "",
        estudiante : ""
    }



    let logInUser = JSON.parse(localStorage.getItem("logInUser"));

    
    console.log(cita)

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
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Mis Horarios</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                    <p className={styles.titulo2}>Agregar sus horarios de disponibilidad durante la semana</p>
                    </div>
                    <div className={styles.input1}>
                        <Input namew='Dia'></Input>
                        <Input namew='Mes'></Input>
                        <Input namew='Año'></Input>

       
                    </div>
                    <div className={styles.input1}>
                        <Input namew='Hora Inicio'></Input>
                        <Input namew='Hora Fin'></Input>
                        <Input namew='Enlace de Sesion'></Input> 
                        <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems:'center', paddingBottom: '20px'}}>
                            <Button>Agregar</Button>
                        </div>
                    </div>
                    <div>
                        <Citas/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default pantallaPerfil;