const userModels = require('../models/users');


const getUsers = async (req, res) => {
    const data = await userModels.find({});
    res.send(data);
    }

const getUser = async (req, res) => {
    const { id } = req.params;
    const data = await userModels.findById(id);
    res.send(data);
    }

const createUser = async (req, res) => {
    const { body } = req;
    const data = await userModels.create(body);
    res.send(data);
    }

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const data = await userModels.findByIdAndUpdate

    (id, body)}

const deleteUser = async (req, res) => {

    const { id } = req.params;
    const data = await userModels.findByIdAndDelete(id);
    res.send(data);
    }

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    }