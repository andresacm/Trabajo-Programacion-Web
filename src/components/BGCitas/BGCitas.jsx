import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Por nombre</Button>
      <Button variant="secondary">Por Fecha</Button>
    </ButtonGroup>
  );
}

export default BasicExample;