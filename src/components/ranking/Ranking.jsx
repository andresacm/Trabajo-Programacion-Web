import Styles from './Ranking.module.css';

const Ranking = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.circulo}>
          <h4 className={Styles.numero}>1</h4>
        </div>
        <div className={Styles.content}>
          <div className={Styles.fecha}>Mario Lopez - Programación Web</div>
          <div className={Styles.nombre}>5 estrellas</div>
    
        </div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.circulo}>
          <h4 className={Styles.numero}>2</h4>
        </div>
        <div className={Styles.content}>
          <div className={Styles.fecha}>Sandra Sanchez - Programación Web</div>
          <div className={Styles.nombre}>4.7 estrellas</div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
