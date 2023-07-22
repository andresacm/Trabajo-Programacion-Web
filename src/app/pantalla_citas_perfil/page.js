'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Input from '../../components/Input/Input.jsx'
import Card_perfil from "@/components/Card_perfil/Card_perfil"
import Date_ from "@/components/Date_Picker/Date_Picker"


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



    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Citas</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.containerLila}>
                        <Card_perfil/>
                    </div>
                    <div className={styles.titulo2}>
                        <h6>Fechas y horarios disponibles</h6>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.forms}>
                    <div className={styles.input1}>
                        <Input type= 'date' className={styles.Input} namew='Ingrese una fecha'><Date_ /></Input>
                        <Input className={styles.Input} namew='Curso de interés'></Input>
                    </div>
                        
                    </div>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;