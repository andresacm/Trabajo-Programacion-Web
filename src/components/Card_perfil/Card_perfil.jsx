import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card_perfil.module.css'

function Card_perfil() {
  return (
    <Card style={{ width: '85rem' }}>
      <Card.Body>
        <div className={styles.container}>
          <div className={styles.imagen}>
            <Card.Img variant="left" src="https://cdn.discordapp.com/attachments/1102289173337088064/1109985766601408614/monogram.png" />
          </div>
          <div className={styles.nombre}>
            <Card.Title>Profesor Juan López</Card.Title>
            <Card.Subtitle>Magister en Ing de Sistemas</Card.Subtitle> 
          </div>
        </div>
        <br/>
        <div className={styles.container1}>

        <Card.Img className={styles.img} variant=""  src="https://media.discordapp.net/attachments/915953820859768875/1109984691236372490/profe1.png" />
        <div>
          <Card.Subtitle className={styles.text}>Candidato a Dr. en Matemáticas e Informática de la Universidad de Barcelona, España. Magíster en Dirección de Tecnologías de Información, Universidad ESAN, Perú. Master en Gestión de las Tecnologías de la Información, Universitat Ramon Llull, Barcelona, España. Investigador en temas relacionados al desarrollo y aplicación de herramientas interactivas para la educación. Director del desarrollo del videojuego 1814: La Rebelión del Cusco. Miembro profesional del International Game Developers Association (IGDA). Consultor en proyectos de desarrollo de software, videojuegos y realidad aumentada. Excoordinador de la Especialidad de Ingeniería Informática. Excoordinador del Grupo de Investigación Avatar-PUCP y de la Diplomatura de Desarrollo de Videojuegos.</Card.Subtitle>
        </div>
        
        </div>

        <Card.Subtitle>Cursos</Card.Subtitle>
        <br/>

        <Button variant="dark" className={styles.boton}>Ingenieria de Software</Button>
        <Button variant="dark" className={styles.boton}>Programación Web</Button>
        <Button variant="dark" className={styles.boton}>Programación de videojuegos</Button>
        <Button variant="dark" className={styles.boton}>Programación Orientada a Objetos</Button>
      </Card.Body>
    </Card>
  );
}

export default Card_perfil;
