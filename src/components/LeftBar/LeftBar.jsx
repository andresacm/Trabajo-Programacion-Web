import Styles from './LeftBar.module.css'
import Link from 'next/link'

const LeftBar = () =>{

    return(

        <div className={Styles.container}>
            <div className={Styles.aux}></div>
            <div className={Styles.menu}>
                <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/' text="Principal" style={{textDecoration: 'none', paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px' }}>Principal</Link></p>
            </div>
            <div className={Styles.menu}>
                <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/' text="Perfil" style={{textDecoration: 'none',paddingLeft: '57px', paddingRight:'57px', paddingTop: '20px', paddingBottom: '20px'}}>Perfil</Link></p>
            </div>
            <div className={Styles.menu}>
                <p className={Styles.parrafo} style={{margin: '0px'}}><Link className={Styles.lnk} href='/' text="Horarios" style={{textDecoration: 'none',paddingLeft: '45px', paddingRight:'45px', paddingTop: '20px', paddingBottom: '20px'}}>Horarios</Link></p>
            </div>

        </div>

    )

}

export default LeftBar