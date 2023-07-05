'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ReservationForm from './reservationform';
import ReservationList from './reservationlist';
import BGCitas from '../../components/BGCitas/BGCitas.jsx'
import Card_reserva from '../../components/Card_reserva/Card_reserva.jsx'

const pantallaPerfil = () =>{

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);
    const [labelValue, setlabelValue] = useState('Seleccionar por nombre')
    function swapTopBar()
    {
        setTopBarIsVisible(!topBarIsVisible)
    }

    let leftBarContent

    if (topBarIsVisible)
    {
        leftBarContent = <LeftBar/>
    }

    const handleClickNombre = () =>{
        
        setlabelValue('Seleccionar por nombre')

    }

    const handleClickFecha = () =>{
        
        setlabelValue('Seleccionar por fecha')

    }

    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Reserva de Cita</h1>
                    </div>    
                    <div className={styles.linea}></div>
                    <div className={styles.busq}>
                        <Input namew={labelValue}></Input>
                        <BGCitas nombre={handleClickNombre} fecha={handleClickFecha}></BGCitas>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Card_reserva nombre="Felipe Lopez Sanchez" universidad="Universidad de Lima" carrera="Ingenieria Industrial"/>
                        <Card_reserva nombre="Felipe Lopez Sanchez" universidad="Universidad de Lima" carrera="Ingenieria Industrial"/>
                        <Card_reserva nombre="Felipe Lopez Sanchez" universidad="Universidad de Lima" carrera="Ingenieria Industrial"/>     
                    </div>
                    
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;