'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const pantallaPDocente = () =>{

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

    const handleOnProgramarCita = () =>{

        


    }

    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Mis Citas</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.contenedorMedio}>
                        <div className={styles.textoMedio}>
                            <p>Actualmente no tiene citas de Asesoría reservadas</p><br/>
                            <Button variant="dark" className={styles.boton}>Programar una cita</Button>
                        </div>
                        
                    </div>

                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPDocente;