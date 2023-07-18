let docentes = [{
    id: 1,
    correo: 'example1@gmail.com',
    contrasenna: '123456',
    nombres: 'ejemplo',
    apellidos: 'a',
    tipoDoc: '',
    nroDoc: 0,
    rol: 'docente',
    foto: '',
    usuario: 'example',
    universidad: '',
    carrera: '',
    cursos: [],
    titulo: '',
    presentacion: '',
    citas: [1, 2]
}];

let counter = 1;

const findAll = () =>{
    return docentes;
}

const create = (docente) =>{
    counter++;
    const newDocente = {...docente, id: counter};
    docentes.push(newDocente);

    return docente;
}

const findOne = (id) =>{
    const result = docentes.find(x => x.id == id);
    return result;
}

const update = (docente) =>{
    const index = docentes.findIndex(item => item.id == docente.id);
    if(index > -1){
        docentes[index] = docente;
        return true
    }

    return false
}

const remove = (id) =>{
    const index = docentes.findIndex(item => item.id == id)
    if(index > -1){
        docentes.splice(index, 1)
        return true
    }

    return false
}

const DocenteRepository = { findAll, create, findOne, update, remove}

export default DocenteRepository;