const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    discreption: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo