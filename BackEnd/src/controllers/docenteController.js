import DocenteRepository from "../repository/docenteRepository.js";

const findAll = (req, res) =>{
    const result = DocenteRepository.findAll();
    return sendResponse(result, res);
}

const findOne = (req, res) =>{
    const id = req.params.id;
    const result = DocenteRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) =>{
    const result = DocenteRepository.create(req.body);
    return sendResponse(result, res);
}

const update = (req, res) =>{
    const result = DocenteRepository.update(req.body)
    return sendResponse(result, res);
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = DocenteRepository.remove(id);
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const DocenteController = {findAll, create, findOne, update, remove}
export default DocenteController;