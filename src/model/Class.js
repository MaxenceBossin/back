const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    students: {
        type: Array
    },
    program: {
        type: String,
        required: false,
    }


});

module.exports = Class = mongoose.model('class', classSchema);
