const express = require('express');
const service = require('../services/classService');
const classRouter = express.Router();


async function getClass(req, res, next){
    let class_
    try {
        class_ = await service.getClassById(req.params.id);
        if(class_ == null){
            return res.status(204).json({message: `No content`})
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
    res.class_ = class_
    next()
}

// GET ALL
classRouter.get('/', async (req, res) => {
    try {
        const classes = await service.getAllClasses();
        res.status(200).json(classes);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});

// GET ONE
classRouter.get('/:id', getClass, (req, res) => {
    res.send({class: res.class_})
})

// Post
classRouter.post('/', async(req,res) => {
    const newClass = new Class({
        name: req.body.name,
        professor: req.body.professor,
    })

    try {
        const result = await service.createClass(newClass)
        res.status(201).json(newClass)
    } catch (e) {
        res.status(500).json(e)
    }
})


module.exports = classRouter
