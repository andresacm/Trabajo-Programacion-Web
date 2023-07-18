import Styles from './ProximasCitas.module.css'

function BasicExample({inicial, nombre, apellido, fecha, inicio}) {
  return (
    <div className={Styles.container}>
        <div className={Styles.containerLetra}>
            <h1 className={Styles.color}>{inicial}</h1>
        </div>
        <div className={Styles.data}>
            <p className={Styles.nombre}><strong>{nombre} {apellido}</strong></p>
            <p className={Styles.fecha}>{fecha} {inicio}</p>
        </div>
    </div>
  );
}

export default BasicExample;