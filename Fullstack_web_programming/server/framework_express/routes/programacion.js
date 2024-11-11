const express = require("express");

const { programacion } = require("../cursos.js");

routerProgramacion.use(express.json());

routerProgramacion.post("/", (req, res) => {
  const cursoNuevo = req.body;

  //Aquí irían algunas comprobaciones de formato

  programacion.push(cursoNuevo);

  res.send(JSON.stringify(programacion));
});

routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;

  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  // Si no lo encuentra, devuelve -1

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }

  res.send(JSON.stringify(programacion));
});

routerProgramacion.post("/", (req, res) => {
  const cursoNuevo = req.body;

  //Aquí irían algunas comprobaciones de formato

  programacion.push(cursoNuevo);

  res.send(JSON.stringify(programacion));
});

routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;

  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];

    //Modifica solo algunas propiedades del objeto

    Object.assign(cursoAModificar, infoActualizada);
  }

  res.send(JSON.stringify(programacion));
});

routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    //Elementos a eliminar desde el índice

    programacion.splice(indice, 1);
  }

  res.send(JSON.stringify(programacion));
});
