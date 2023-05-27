import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample({nombre, fecha}) {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={nombre}>Por nombre</Button>
      <Button variant="secondary" onClick={fecha}>Por Fecha</Button>
    </ButtonGroup>
  );
}

export default BasicExample;