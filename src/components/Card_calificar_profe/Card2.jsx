import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';
import CompToast from '../Toggle_Toast/Toggle_Toast';
import React, { useState } from 'react';

function CardComp2() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => {
    setShowA(!showA);
  };
  return (
    <Card style={{ width: '21rem' }}>
      <Card.Body>
        <div className={styles.container}>
            <div className={styles.imagen}>
              <Card.Img variant="left" src="https://cdn.discordapp.com/attachments/1102289173337088064/1109989202235490375/monogram1.png" />
            </div>
            <div className={styles.nombre}>
              <Card.Title>Adriana Sánchez</Card.Title>
              <Card.Subtitle>Mágister en Ing de Sistemas</Card.Subtitle>
            </div>
          </div>
        <br/>
        <Card.Img variant=""  src="https://cdn.discordapp.com/attachments/1102289173337088064/1109989021444218932/profe2.png" />
        <br/>
        <br/>

        <Card.Subtitle>Jueves, 27 de abril de 2023 - 04:00 pm</Card.Subtitle>
        <Card.Text>Curso: Programación Orientada a objetos</Card.Text>
        <Card.Link href="#">Enlace de Zoom</Card.Link>
        <br/>
        <br/>
        <Card.Text>Calificación: 4.5</Card.Text>
        <Button variant="dark" className={styles.boton} onClick={toggleShowA}>Calificar</Button>
        {showA && <CompToast show={showA} onClose={toggleShowA} animation = {true} />}
      </Card.Body>
    </Card>
  );
}

export default CardComp2;