'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useEffect, useState} from "react"
import ProximasCitas from '../../components/ProximasCitas/ProximasCitas.jsx'
import CitasApi from '../api/citas.js'
import EstudiantesApi from '../api/estudiantes.js'

const pantallaPDocente = () =>{

    const logInUser = JSON.parse(window.sessionStorage.logInUser);
    const [citas, setCitas] = useState([]);
    const [estudiantes, setEstudiantes] = useState([]);
    
    const handleOnLoad = async() =>{
        const result = await CitasApi.findAll(1);
        console.log("result data: "+result.data)
        setCitas(result.data)

        //const resultE = await EstudiantesApi.findAll();
        //setEstudiantes(resultE.data)
    }
    
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

    useEffect(() =>{
        handleOnLoad();
    }, [])
    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTop}>
                        <div className={styles.containerTitulo}>
                            <h1 className={styles.titulo}>Bienvenido, Profesor {logInUser.nombres} {logInUser.apellidos}</h1>
                        </div>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.citas}>
                        <h5 className={styles.textCitas}><strong>Proximas citas</strong></h5>
                        <div className={styles.divCitas}>
                            {
                                
                                citas.map(item =>(
                                    <ProximasCitas inicial={"x"} nombre={item.nombres} apellidos={item.apellidos} fecha={item.fecha} inicio={item.inicio}/>
                                    
                                ))

                            }
                        </div>
                    </div>
                    <div className={styles.citas}>

                    </div>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPDocente;