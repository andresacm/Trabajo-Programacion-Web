'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Ranking from '../../components/ranking/Ranking.jsx'


const pantallaPerfil = () =>{

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
                        <h1 className={styles.titulo}>Ranking</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                        <Ranking/>
                    </div>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;
