let estudiantes = [{
    id: 1,
    correo: '',
    contrasenna: '',
    nombres: '',
    apellidos: '',
    tipoDoc: '',
    nroDoc: 0,
    rol: '',
    foto: '',
    usuario: '',
    universidad: '',
    carrera: '',
    cursos: [],
    titulo: '',
    presentacion: '',
    citas: [1, 2]
}];

let counter = 1;

const findAll = () =>{
    return estudiantes;
}

const create = (estudiante) =>{
    counter++;
    const newEstudiante = {...estudiante, id: counter};
    estudiantes.push(newEstudiante);

    return estudiante;
}

const findOne = (id) =>{
    const result = estudiantes.find(x => x.id == id);
    return result;
}

const update = (estudiante) =>{
    const index = estudiantes.findIndex(item => item.id == estudiante.id);
    if(index > -1){
        estudiantes[index] = estudiante;
        return true
    }

    return false
}

const remove = (id) =>{
    const index = estudiantes.findIndex(item => item.id == id)
    if(index > -1){
        estudiantes.splice(index, 1)
        return true
    }

    return false
}

const EstudianteRepository = { findAll, create, findOne, update, remove}

export default EstudianteRepository;