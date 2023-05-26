'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import CardComp1 from '@/components/Card_calificar_profe/Card1'
import CardComp2 from '@/components/Card_calificar_profe/Card2'
import Button from "react-bootstrap/Button"

const pantallaCPAlumno = () =>{

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
                        <h1 className={styles.titulo}>Mis citas</h1>
                        <Button variant="dark" className={styles.boton1}> Programar una cita </Button>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.containerTitulo}>
                    <p className={styles.titulo2}>Citas de asesoría reservadas: </p>
                    <Button variant="dark" className={styles.boton}> Ver citas pasadas</Button>
                    </div>
                    <div className={styles.container1}>
                        <div className={styles.contenidoCard}>
                            <CardComp1/>
                        </div>
                        <div className={styles.contenidoCard}>
                            <CardComp2/>
                        </div>
                    </div>

                </div>
            </div>
                      
        </div>

    )

}

export default pantallaCPAlumno;