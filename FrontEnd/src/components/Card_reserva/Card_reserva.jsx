import styles from './Card_reserva.module.css'

const Card_reserva = ({nombre, universidad, carrera}) =>{
    return(
        <button className={styles.profesorButton}>
            <h3>{nombre}</h3>
            <p style={{ fontSize: '12px' }}>{universidad} - {carrera}</p>
        </button>
    )

}

export default Card_reserva;