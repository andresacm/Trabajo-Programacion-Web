
import Boton from '../Buttonz/Button.jsx'
import Styles from './Citas.module.css'

const Citas = () => {
    return (
        <div className={Styles.container}> 
            <div className={Styles.circulo}>
                <h4 className={Styles.numero}>1</h4>
            </div>
            <div className={Styles.fecha}>Lunes de 8:00 am a 10:00 am</div>
            <Boton></Boton>
        </div>
    )
}

export default Citas