const express = require('express');
const service = require('../services/roomService');
const roomRouter = express.Router();


async function getRoom(req, res, next){
    let room
    try {
        room = await service.getRoomById(req.params.id);
        if(room == null){
            return res.status(204).json({message: `No content`})
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
    res.room = room
    next()
}

// GET ALL
roomRouter.get('/', async (req, res) => {
    try {
        const classes = await service.getAllRooms();
        res.status(200).json(classes);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});

// GET ONE
roomRouter.get('/:id', getRoom,(req, res) => {
    res.send({class: res.room})
})


module.exports = roomRouter
