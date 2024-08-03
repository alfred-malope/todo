const express = require("express");
const router = express.Router()
const Todo = require("../models/task")

router.post('/', async (req, res) => {
    try {
        const task = new Todo({
            discreption: req.body.discreption,
            userId: req.body.userId
        })

        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
})

router.get('/', async (req, res) => {
    try {
        const tasks = await Todo.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const tasks = await Todo.findById(req.params.id)
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
})

router.put('/completed/:id', async (req, res) => {
    try {
        const tasks = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                completed: true
            },
            {new: true}
        )
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const tasks = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                discreption: req.body.discreption,
                userId: req.body.userId
            },
            {new: true}
        )
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const tasks = await Todo.findByIdAndDelete(req.params.id)
        res.json({message: "Task Deleted"})
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
})

module.exports = router