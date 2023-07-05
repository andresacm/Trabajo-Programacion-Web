import EstudianteRepository from "../repository/estudianteRepository.js";

const findAll = (req, res) =>{
    const result = EstudianteRepository.findAll();
    return sendResponse(result, res);
}

const findOne = (req, res) =>{
    const id = req.params.id;
    const result = EstudianteRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) =>{
    const result = EstudianteRepository.create(req.body);
    return sendResponse(result, res);
}

const update = (req, res) =>{
    const result = EstudianteRepository.update(req.body)
    return sendResponse(result, res);
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = EstudianteRepository.remove(id);
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const EstudianteController = {findAll, create, findOne, update, remove}
export default EstudianteController;