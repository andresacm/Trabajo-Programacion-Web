import HorarioRepository from "../repository/cursoRepository.js";

const findAll = async (req, res) =>{
    const id = req.params.id;
    const result = await HorarioRepository.findAll(id);
    return sendResponse(result,res)
}

const create = async (req, res) =>{

    const result = await HorarioRepository.create(req.body);

    return sendResponse(result, res);
}

const remove = async (req, res) => {
    const id = req.params.id;
    const result = await HorarioRepository.remove(id);
    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const HorarioRepository = {findAll, create, remove}

export default HorarioRepository;