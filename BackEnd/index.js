import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//imports rutas
import docentesRoutes from './src/routes/docentes.js';
import estudiantesRoutes from './src/routes/estudiantes.js';
import citasRoutes from './src/routes/citas.js'
//
let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    return res.json({result: 'OK'});
});
//
//rutas
app.use("/docentes", docentesRoutes);
app.use("/estudiantes", estudiantesRoutes)
app.use("/citas", citasRoutes)

app.listen(3001, () => {
    console.log('Servidor iniciado.');
});
