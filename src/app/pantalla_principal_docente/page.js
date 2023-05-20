'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'


const pantallaPDocente = () =>{

    return(
        <div className={styles.container}>
            <TopBar></TopBar>
            <div className={styles.main}>
                <LeftBar></LeftBar>
                <div className={styles.contenido}>
                    {/* ESCRIBIR CODIGO AQUI O.O */}
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPDocente;