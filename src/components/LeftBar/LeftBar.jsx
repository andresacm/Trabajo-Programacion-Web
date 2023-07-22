import { useEffect, useState } from 'react';
import Styles from './LeftBar.module.css'
import Link from 'next/link'

const LeftBar = ({logInUser}) =>{
 


    // useEffect(() =>{
    //     let val;
    //     try {
    //         val = JSON.parse(window?.sessionStorage?.logInUser || "");

    //     } catch(err) {
    //         val = null;
    //     }
        
    //     setLogInUser( val || {
    //         "nombres": "John",
    //         "apellidos": "Doe",
    //         "rol": "Docente"
    //       });

    // }, [])

    if(logInUser?.rol == "Docente")
    {
        return(

            <div className={Styles.container}>
                <div className={Styles.aux}></div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_principal_docente' text="Principal" style={{textDecoration: 'none', paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px' }}>Principal</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_perfil' text="Perfil" style={{textDecoration: 'none',paddingLeft: '57px', paddingRight:'57px', paddingTop: '20px', paddingBottom: '20px'}}>Perfil</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_horarios' text="Horarios" style={{textDecoration: 'none',paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px'}}>Horarios</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_citas_docente' text="Citas" style={{textDecoration: 'none',paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px'}}>Citas</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_calificaciones' text="Calificaciones" style={{textDecoration: 'none',paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px'}}>Calificaciones</Link></p>
                </div>
    
            </div>
        )
    }

    else
    {
        return(

            <div className={Styles.container}>
                <div className={Styles.aux}></div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_principal_estudiante' text="Principal" style={{textDecoration: 'none', paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px' }}>Principal</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_perfil' text="Perfil" style={{textDecoration: 'none',paddingLeft: '57px', paddingRight:'57px', paddingTop: '20px', paddingBottom: '20px'}}>Perfil</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_citas_SIN' text="Citas" style={{textDecoration: 'none',paddingLeft: '57px', paddingRight:'57px', paddingTop: '20px', paddingBottom: '20px'}}>Citas</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_calificaciones' text="Calificaciones" style={{textDecoration: 'none',paddingLeft: '30px', paddingRight:'30px', paddingTop: '20px', paddingBottom: '20px'}}>Calificaciones</Link></p>
                </div>
                <div className={Styles.menu}>
                    <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/pantalla_ranking' text="Ranking" style={{textDecoration: 'none',paddingLeft: '30px', paddingRight:'30px', paddingTop: '20px', paddingBottom: '20px'}}>Ranking</Link></p>
                </div>
    
            </div>
        )        
    }


}

export default LeftBar