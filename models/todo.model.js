const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoModel = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        text: String
    },
    {
        versionKey: false
    });

module.exports = mongoose.model('Todo', TodoModel);
