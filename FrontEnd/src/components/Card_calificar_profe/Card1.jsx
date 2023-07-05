import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';
import CompToast from '../Toggle_Toast/Toggle_Toast';
import React, { useState } from 'react';

function CardComp1() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => {
    setShowA(!showA);
  };

  return (
    <Card style={{ width: '21rem' }}>
      <Card.Body>
        <div className={styles.container}>
          <div className={styles.imagen}>
            <Card.Img variant="left" src="https://cdn.discordapp.com/attachments/1102289173337088064/1109985766601408614/monogram.png" />
          </div>
          <div className={styles.nombre}>
            <Card.Title>Juan López</Card.Title>
            <Card.Subtitle>Mágister en Ing de Software</Card.Subtitle> 
          </div>
        </div>
        <br/>
        <Card.Img variant="" src="https://media.discordapp.net/attachments/915953820859768875/1109984691236372490/profe1.png" />
        <br/>
        <br/>
        <Card.Subtitle>Lunes, 24 de abril de 2023 - 08:00am</Card.Subtitle>
        <Card.Text>Curso: Programación Web</Card.Text>
        <br/>
        <Card.Link href="#">Enlace de Zoom</Card.Link>
        <br/>
        <br/>
        <Card.Text>No calificado</Card.Text>

        <Button variant="dark" className={styles.boton} onClick={toggleShowA}>Calificar</Button>
        {showA && <CompToast show={showA} onClose={toggleShowA}/>}


      </Card.Body>
    </Card>
  );
}

export default CardComp1;
