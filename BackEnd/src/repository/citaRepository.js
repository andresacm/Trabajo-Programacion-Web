let citas = [{
    id: 1,
    nombres: 'Juan',
    apellidos: 'Perez',
    diaSemana: 'Lunes',
    fecha: '18/06/2023',
    inicio: '08:00 am',
    fin: '10:00 am',
    enlace: 'https://www.zoom.com',
    idDocente: 1,
    idEstudiante: 1,
},{
    id: 2,
    nombres: 'Julio',
    apellidos: 'Uribe',
    diaSemana: 'Jueves',
    fecha: '21/06/2023',
    inicio: '10:00 am',
    fin: '1:00 pm',
    enlace: 'https://www.zoom.com',
    idDocente: 1,
    idEstudiante: 1

}];

let counter = 1;

const findAll = (id) =>{
    //recuperar citas por id
    let respuesta = [];
    console.log("llega id: "+ id);
    for (let i = 0; i < citas.length; i++) {
        console.log("idDocente: "+citas[i].idDocente)
        if (citas[i].idDocente === id) {
            console.log(citas[i]);
            respuesta.push(citas[i]);
        }
    }
    console.log(respuesta);
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