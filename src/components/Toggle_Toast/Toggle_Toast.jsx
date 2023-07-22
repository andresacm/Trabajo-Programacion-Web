import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import CompStarsRating from '../Stars_rating/Stars_rating';
import styles from './Toggle_Toast.module.css';
function CompToast() {

  return (
    

      <ToastContainer className="p-3" position='middle-center'>
        <Toast >
          <Toast.Body className={styles.caja}>
            <h5>Califica la atención</h5>
            Es muy importante para nosotros saber cómo te fue en tu sesión de asesoría
            <CompStarsRating/>
            </Toast.Body>
        </Toast>
      </ToastContainer>

  );
}

export default CompToast;
