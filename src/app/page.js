'use client'

import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react' 
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const nano = () => 
  {
    
  }

  const [usuario, setUsuario] = useState('');  
  const [password, setPassword] = useState('');  

  const router = useRouter();
  
  const handleClick = () =>{
      
      if(usuario === 'adminDocente' && password === 'adminDocente'){
          router.push('/pantalla_principal_docente');

      }else if(usuario === 'adminEstudiante' && password === 'adminEstudiante'){
          router.push('/pantalla_principal_estudiante');
      }
      else{
          alert('Acceso denegado');
      }
      
  }
  
  return (

    
    <main className={styles.container}>
      <h1 className={styles.titulo}>Sistema de citas para atención a estudiantes</h1>
      <form>
      
        <div className={styles.form_box}>
          <input type='text' className={styles.form_input} onChange={e => setUsuario(e.target.value)}></input>
          <label for='' className={styles.form_label}>Usuario</label>
        </div>
        <div className={styles.form_box}>
          <input type='password' className={styles.form_input} onChange={e => setPassword(e.target.value)}></input>
          <label for='' className={styles.form_label}>Password</label>
        </div>

      </form>
      <p className={styles.parrafo}><Link className={styles.lnk} href='/pantalla_registro' text="Registro de nuevo usuario">Registro de nuevo usuario</Link> - <Link className={styles.lnk} href='/olvide_contrasenna' text="Olvidé mi contraseña" >Olvidé mi contraseña</Link> </p>
      <div className={styles.btn}>
        <div className={styles.a}>
            <button className={styles.salir}>Salir</button> <button className={styles.ingresar} onClick={handleClick}> Ingresar </button>
          </div>
      </div>
  
    </main>

  )
}
