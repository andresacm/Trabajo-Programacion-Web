import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css'

function CardComp1() {
  return (
    <Card style={{ width: '21rem' }}>
      <Card.Body>
        <div className={styles.container}>
          <div className={styles.imagen}>
            <Card.Img variant="left" src="https://cdn.discordapp.com/attachments/1102289173337088064/1109985766601408614/monogram.png" />
          </div>
          <div className={styles.nombre}>
            <Card.Title>Jacinto Leopoldo</Card.Title>
            <Card.Subtitle>Estudiante en Ing de Sistemas</Card.Subtitle> 
          </div>
        </div>
        <br/>
        <Card.Img className={styles.img} variant=""  src="https://cdn.discordapp.com/attachments/1102289173337088064/1110040309603254282/alumno1.png" />
        <br/>
        <br/>

        <Card.Subtitle>Lunes, 24 de abril de 2023 - 08:00am</Card.Subtitle>
        <Card.Text>Curso: Programación Web</Card.Text>
        <br/>
        <Card.Link href="#">Enlace de Zoom</Card.Link>
        <br/>
        <br/>

        <Button variant="dark" className={styles.boton}>Cancelar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp1;

