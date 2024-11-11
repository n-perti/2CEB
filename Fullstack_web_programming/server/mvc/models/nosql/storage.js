const mongoose = require('mongoose');

// create model
// create controller

const storageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const Storage = mongoose.model('Storage', storageSchema);

module.exports = Storage;