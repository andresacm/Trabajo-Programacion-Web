import React from 'react';

function ReservationList() {

  return (
    <div style={{ display: 'flex' }}>
      <button className="profesorButton" style={{ marginRight: '20px', backgroundColor: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
        <h3>Profesor 1</h3>
        <p style={{ fontSize: '12px' }}>Carrera del profesor 1</p>
      </button>
      <button className="profesorButton" style={{ marginRight: '20px', backgroundColor: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
        <h3>Profesor 2</h3>
        <p style={{ fontSize: '12px' }}>Carrera del profesor 2</p>
      </button>
      <button className="profesorButton" style={{ backgroundColor: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
        <h3>Profesor 3</h3>
        <p style={{ fontSize: '12px' }}>Carrera del profesor 3</p>
      </button>
    </div>
  );
}

export default ReservationList;
