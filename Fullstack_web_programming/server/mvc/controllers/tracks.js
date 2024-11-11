/**

* Obtener lista de la base de datos

* @param {*} req

* @param {*} res

*/

const { tracksModel } = require("../models");

const getItems = async (req, res) => {
  const data = await tracksModel.find({});

  res.send(data);
};

const getItem = (req, res) => {
  const { id } = req.params;

  res.send({ id });
};

const createItem = async (req, res) => {
  const { body } = req;

  //console.log(body)

  const data = await tracksModel.create(body);

  res.send(data);
};

const updateItem = (req, res) => {
  const { id } = req.params;

  const { body } = req;

  res.send({ id, body });
};

const deleteItem = (req, res) => {
  const { id } = req.params;

  res.send({ id });
};

module.exports = {
  getItems,
  getItem,

  createItem,
  updateItem,

  deleteItem,
};
