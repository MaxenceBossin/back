const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

});

module.exports = Room = mongoose.model('room', roomSchema);
