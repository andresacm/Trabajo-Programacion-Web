import CitasRepository from "../repository/citaRepository.js";
import DocenteRepository from "../repository/docenteRepository.js";
import EstudianteRepository from "../repository/estudianteRepository.js";

const findAll = (req, res) =>{
    const id = req.params.id;
    const result = CitasRepository.findAll(id);
    return sendResponse(result,res)
}

const findOne = (req, res) =>{
    const id = req.params.id;
    const result = CitasRepository.findOne(id);
    return sendResponse(result, res);
}

const create = (req, res) =>{
    const idDocente = req.body.idDocente;
    const idEstudiante = req.body.idEstudiante;

    const docente = DocenteRepository.findOne(idDocente) ?? null;
    const estudiante = EstudianteRepository.findOne(idEstudiante) ?? null;

    let result = null;

    if (docente) {
        if(estudiante){
            result = CitasRepository.create(req.body);
        }
    }

    return sendResponse(result, res);
}

const update = (req, res) =>{
    const result = CitasRepository.update(req.body);
    return sendResponse(result, res)
}

const remove = (req, res) =>{
    const id = req.params.id;
    const result = CitasRepository.remove(id);
    return sendResponse(result, res)
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CitaController = {findAll, findOne, create, update, remove}

export default CitaController;