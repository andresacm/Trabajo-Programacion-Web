'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import CardComp1 from '@/components/Card_cita_profe/Card1'
import CardComp2 from '@/components/Card_cita_profe/Card2'
import Button from "react-bootstrap/Button"

const pantallaCAlumno = () =>{
    const type = "teacher";
    /*let items = [
        {
            id: 1,
            name: "Juan Lopéz",
            career: "Ingeniería de Sistemas",
            image: "https://media.discordapp.net/attachments/915953820859768875/1109984691236372490/profe1.png",
            logo: "https://media.discordapp.net/attachments/915953820859768875/1109985675886993448/monogram.png",
            day: new Date(),
            subject: "Curso Programación Web",
            teacherId: 1,
            studentId: 1,
        },
        {
            id: 2,
            name: "Juan Lopéz",
            career: "Ingeniería de Sistemas",
            image: "https://media.discordapp.net/attachments/915953820859768875/1109984691236372490/profe1.png",
            logo: "https://media.discordapp.net/attachments/915953820859768875/1109985675886993448/monogram.png",
            day: new Date(),
            subject: "Curso Programación Web",
            teacherId: 1,
            teacher: {

            },
            studentId: 2,
            student: {

            }
        }
    ]*/

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
                        {getAppointments(type).map((item, index) => {
                            return <div className={styles.contenidoCard}>
                            <CardComp1 {...item}/>
                             </div>
                        })}
                        
                    </div>

                </div>
            </div>
                      
        </div>

    )

}

export default pantallaCAlumno;