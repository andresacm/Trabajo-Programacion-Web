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
                        <h1 className={styles.titulo}>Reserva de Cita</h1>
                    </div>    
                    <div className={styles.linea}></div>
                    <div className={styles.busq}>
                        <Input namew="seleccione una fecha"></Input>
                        <BGCitas></BGCitas>
                    </div>
                    <div style={{ display: 'flex' }}>
      <button className="profesorButton" style={{ marginRight: '20px', backgroundColor: '#F3EDF7', padding: '10px', border: 'none', cursor: 'pointer' }}>
        <h3>Felipe Lopez Jimenez</h3>
        <p style={{ fontSize: '12px' }}>Universidad de Lima - Ingenieria de sistemas</p>
      </button>
      <button className="profesorButton" style={{ marginRight: '20px', backgroundColor: '#F3EDF7', padding: '10px', border: 'none', cursor: 'pointer' }}>
        <h3>Felipe Lopez Sanchez</h3>
        <p style={{ fontSize: '12px' }}>Universidad de Lima - Ingenieria Industrial</p>
      </button>
      <button className="profesorButton" style={{ backgroundColor: '#F3EDF7', padding: '10px', border: 'none', cursor: 'pointer' }}>
        <h3>Felipe Andres Lopez</h3>
        <p style={{ fontSize: '12px' }}>Universidad de Tacna - Medicina</p>
      </button>
    </div>
                    
                </div>
            </div>
                      
        </div>

    )

}

export default pantallaPerfil;