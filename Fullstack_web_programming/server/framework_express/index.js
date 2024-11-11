const express = require('express');
const { infoCursos } = require('./data/courses.js');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

routerProgramacion.get('/', (req, res) => {
    const cursos = infoCursos.programacion;
    if (req.query.order === 'vistas') {
        res.send(JSON.stringify(cursos.sort((a, b) => b.vistas - a.vistas)));
    } else {
        res.send(JSON.stringify(cursos));
    }
});
// app.get('/api/cursos/programacion', (req, res) => {
//     const cursos = infoCursos.programacion;
//     if (req.query.order === 'vistas') {
//         res.send(JSON.stringify(cursos.sort((a, b) => b.vistas - a.vistas)));
//     } else {
//         res.send(JSON.stringify(cursos));
//     }
//     //res.send(JSON.stringify(infoCursos.programacion));
// });

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const cursos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (req.query.order === 'vistas') {
        res.send(JSON.stringify(cursos.sort((a, b) => b.vistas - a.vistas)));
    } else {
        res.send(JSON.stringify(cursos));
    }

    //res.send(JSON.stringify(cursos));
});
// app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
//     const lenguaje = req.params.lenguaje;
//     const cursos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
//     if (req.query.order === 'vistas') {
//         res.send(JSON.stringify(cursos.sort((a, b) => b.vistas - a.vistas)));
//     } else {
//         res.send(JSON.stringify(cursos));
//     }

//     //res.send(JSON.stringify(cursos));
// });

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const cursos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    res.send(JSON.stringify(cursos));
});

// app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
//     const lenguaje = req.params.lenguaje;
//     const nivel = req.params.nivel;
//     const cursos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
//     res.send(JSON.stringify(cursos));
// });

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});
// app.get('/api/cursos/matematicas', (req, res) => {
//     res.send(JSON.stringify(infoCursos.matematicas));
// });

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const cursos = infoCursos.matematicas.filter(curso => curso.tema === tema);
    res.send(JSON.stringify(cursos));
});

// app.get('/api/cursos/matematicas/:tema', (req, res) => {
//     const tema = req.params.tema;
//     const cursos = infoCursos.matematicas.filter(curso => curso.tema === tema);
//     res.send(JSON.stringify(cursos));
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server iniciado en el puerto ${port}`);
});