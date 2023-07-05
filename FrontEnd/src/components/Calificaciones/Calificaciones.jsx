import Styles from './Calificaciones.module.css';

const Citas = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.circulo}>
          <h4 className={Styles.numero}>1</h4>
        </div>
        <div className={Styles.content}>
          <div className={Styles.fecha}>Mario Lopez - 24 de abril 2024 - 5 estrellas</div>
          <div className={Styles.nombre}>"El profesor fue muy claro y supo darme buenos consejos. Muchas gracias!"</div>
    
        </div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.circulo}>
          <h4 className={Styles.numero}>2</h4>
        </div>
        <div className={Styles.content}>
          <div className={Styles.fecha}>Sandra Sanchez - 23 de abril de 2024 - 4.5 estrellas</div>
          <div className={Styles.nombre}>"Por lo general estuvo bien, pero hay algunas cosas que no entendí"</div>
        </div>
      </div>
    </div>
  );
}

export default Citas;
