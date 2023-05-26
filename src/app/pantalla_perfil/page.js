'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


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
                    <div className={styles.containerTop}>
                        <div className={styles.containerTitulo}>
                            <h1 className={styles.titulo}>Mi Perfil</h1>
                        </div>
                        <div className={styles.containerBoton}>
                            <Button>Cancelar</Button>
                        </div>    
                        <div className={styles.containerBoton}>
                            <Button>Guardar</Button>
                        </div>
                    </div>
                    <div className={styles.linea}></div>
                    <div>
                        <h2 className={styles.titulo2}>Informacion Personal</h2>
                    </div>
                    <div className={styles.infoPersonal}>
                        <div className={styles.inputs}>
                            <div className={styles.input1}>
                                <Input namew='Nombres'></Input>
                                <Input namew='Apellidos'></Input>
                                <Input namew='Tipo de Documento'></Input>
                            </div>
                            <div className={styles.input1}>
                                <Input namew='Rol'></Input>
                                <Input namew='Numero'></Input>
                            </div>
                        </div>
                        <div className={styles.fotoPerfil}>
                            <p style={{alignContent: 'center'}}>fotito</p>
                        </div>
                    </div>
                    
                    
                    <Tabs
                    defaultActiveKey="datos_usuario"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="datos_usuario" title="Datos de usuario">
                    <>
                        <div className={styles.DataUsuario}>
                            <Input namew='Usuario'></Input>
                        </div>
                        <div className={styles.DataUsuario}>
                            <Input namew='Constrasena Actual'></Input>
                            <Input namew='Nueva Contrasena'></Input>
                            <Input namew='Repetir Contrasena'></Input>
                        </div>
                    </>
                    </Tab>
                    <Tab eventKey="univerisdad" title="Universidad">
                        <>
                        <div className={styles.DataUsuario}>
                        <Input namew='Universidad'></Input>
                        <Input namew='Agregar Curso'></Input>
                        </div>
                        <div className={styles.DataUsuario}>
                        <Input namew='Carrera'></Input>
                        </div>
                        </>
                    </Tab>
                    <Tab eventKey="presentacion" title="Presentacion">
                    <>
                    <div className={styles.DataUsuario}>
                        <Input namew='Titulo'></Input>
                    </div>
                    <div className={styles.DataUsuario}>
                        <Input namew='Presentacion'></Input>
                    </div>
                    </>
                    </Tab>
                    </Tabs>
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;