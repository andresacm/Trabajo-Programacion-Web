import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css'



function CardComp2() {
  return (
    <Card style={{ width: '21rem' }}>
      <Card.Body>
        <div className={styles.container}>
            <div className={styles.imagen}>
              <Card.Img variant="left" src="https://cdn.discordapp.com/attachments/1102289173337088064/1109989202235490375/monogram1.png" />
            </div>
            <div className={styles.nombre}>
              <Card.Title>Anastacio Suarez</Card.Title>
              <Card.Subtitle>Estudiante en Ing. Industrial</Card.Subtitle>
            </div>
          </div>
        <br/>
        <Card.Img className={styles.img}  variant=""  src="https://cdn.discordapp.com/attachments/1102289173337088064/1110040329106751568/alumno2.png" />
        <br/>
        <br/>

        <Card.Subtitle>Jueves, 27 de abril de 2023 - 04:00 pm</Card.Subtitle>
        <Card.Text>Curso: Programación Orientada a objetos</Card.Text>
        <Card.Link href="#">Enlace de Zoom</Card.Link>
        <br/>
        <br/>

        <Button variant="dark" className={styles.boton}>Cancelar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp2;