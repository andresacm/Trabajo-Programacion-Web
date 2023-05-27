'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Calificaciones from '@/components/Calificaciones/Calificaciones'


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
                        <h1 className={styles.titulo}>Calificaciones</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                        <Calificaciones/>
                    </div>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;