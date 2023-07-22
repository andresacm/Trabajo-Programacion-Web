'use client'
 
import styles from './page.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react' 
import { useRouter } from 'next/navigation'
import DocentesApi from './api/docentes.js'
import EstudiantesApi from './api/estudiantes.js'


export default function Home() {

  const [docentes, setDocentes] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);

  const handleOnLoad = async() =>{
    const resultD = await DocentesApi.findAll();
    setDocentes(resultD?.data);
    const resultE = await EstudiantesApi.findAll();
    setEstudiantes(resultE?.data);
  }

  let logInUsuario;
  console.log(estudiantes)
  const [usuario, setUsuario] = useState('');  
  const [password, setPassword] = useState('');  
  const router = useRouter();
  const handleClick = () =>{
      
    let a = false;
    let cont = 0;

    for (let i = 0; i < docentes.length; i++) {
      if ((docentes[i].usuario == usuario && docentes[i].contrasenna == password) || (docentes[i].correo == usuario && docentes[i].contrasenna == password)) {
        a = true;
        logInUsuario = docentes[i]
        cont = i
      }
      
    }

    for (let j = 0; j < estudiantes.length; j++) {
      if ((estudiantes[j].usuario == usuario && estudiantes[j].contrasenna == password) || (estudiantes[j].correo == usuario && estudiantes[j].contrasenna == password)) {
        a = true;
        logInUsuario = estudiantes[j]
        cont = j
      }
      
    }
    
    if (a == true) {
      window.sessionStorage.setItem("logInUser", JSON.stringify(logInUsuario));
      if (logInUsuario.rol == "docente")
      {
        router.push("/pantalla_principal_docente")
      }
      else if(logInUsuario.rol == "estudiante")
      {
        router.push("/pantalla_principal_estudiante")
      }
    }else{
      alert("Usuario o contrasena incorrectos")
    }
      
  }
  
   useEffect(() => {
      handleOnLoad()
   },[]);

  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
      import("bootstrap/dist/js/bootstrap.bundle.js");
   }, []);

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
