'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"

const pantallaPEstudiante = () =>{

    const logInUser = JSON.parse(sessionStorage.getItem("logInUser"));

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
                            <h1 className={styles.titulo}>Bienvenido, Estudiante {logInUser.nombres} {logInUser.apellidos}</h1>
                        </div>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.citas}>
                        
                    </div>
                    <div className={styles.citas}>

                    </div>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPEstudiante;