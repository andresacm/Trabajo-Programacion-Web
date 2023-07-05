import React, { useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/Input/Input';
import Button from 'react-bootstrap/Button';

function ReservationList() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [professors, setProfessors] = useState([
    { id: 1, name: 'Felipe Lopez Jimenez', career: 'Ingeniería de sistemas' },
    { id: 2, name: 'Felipe Lopez Sanchez', career: 'Ingeniería Industrial' },
    { id: 3, name: 'Felipe Andres Lopez', career: 'Medicina' },
  ]);
  const [searchResults, setSearchResults] = useState([]);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex);
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    searchReservation(value);
  };

  const searchReservation = (searchTerm) => {
    const results = professors.filter((professor) =>
      professor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div className={styles.input1}>
        <Input
          className={styles.wideInput}
          name="Búsqueda"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <Button
          onClick={() => handleButtonClick(1)}
          className={`${styles.button} ${selectedButton === 1 ? 'selected' : ''}`}
        >
          Por nombre
        </Button>
        <Button
          onClick={() => handleButtonClick(2)}
          className={`${styles.button} ${selectedButton === 2 ? 'selected' : ''}`}
        >
          Por fecha
        </Button>
      </div>
      <div>Ingrese nombre de docente, universidad o curso</div>
      <div>
        Resultados de la búsqueda:
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              {result.name} - {result.career}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );        

}

export default ReservationList;
