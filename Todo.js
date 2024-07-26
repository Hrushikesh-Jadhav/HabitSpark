const mongoose = require('mongoose')
const { PiArticleNyTimesFill } = require('react-icons/pi')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos",TodoSchema)
module.exports = TodoModel