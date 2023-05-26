import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css'

function CardComp1(props) {
  return (
    <Card style={{ width: '21rem'}}>
      <Card.Body>
        <div className={styles.container}>
          <div className={styles.imagen}>
            <Card.Img variant="left" src={props.logo} />
          </div>
          <div className={styles.nombre}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.career}</Card.Subtitle> 
          </div>
        </div>
        <br/>
        <Card.Img variant="" src={props.image} />
        <br/>
        <br/>

        <Card.Subtitle>{props.day.toISOString()}</Card.Subtitle>
        <Card.Text>{props.subject}</Card.Text>
        <br/>
        <Card.Link href="#">{props.zoomLink}</Card.Link>
        <br/>
        <br/>
        <Card.Text>No calificado</Card.Text>
        <Button variant="dark" className={styles.boton}>Cancelar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp1;

