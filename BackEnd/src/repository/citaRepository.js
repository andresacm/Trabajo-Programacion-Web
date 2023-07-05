let citas = [{
    id: 1,
    diaSemana: '',
    inicio: '',
    fin: '',
    enlace: '',
    idDocente: 1,
    idEstudiante: 1
}];

let counter = 1;

const findAll = () =>{
    return citas;
}

const create = (cita) =>{
    counter++;
    const newCita = {...cita, id: counter}
    citas.push(newCita)

    return cita
}

const findOne = (id) =>{
    const result = citas.find(x => x.id == id)
    return result
}

const update = (cita) =>{
    const index = citas.findIndex(item => item.id === cita.id)
    if (index > -1) {
        citas[index] = cita
        return true
    }
    return false
}

const remove = (id) =>{
    const index = citas.findIndex(item => item.id == id)
    if (index > -1) {
        citas.splice(index, 1)
        return true
    }
    return false
}

const CitasRepository = {findAll, create, findOne, update, remove};
export default CitasRepository;