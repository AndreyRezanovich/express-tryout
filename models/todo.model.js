const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchText = require('mongoose-text-search');

const TodoModel = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        text: String,
        IsChecked: {
            type: Boolean,
            default: false,
        }
    },
    {
        versionKey: false
    });

TodoModel.plugin(searchText);
TodoModel.index({
    text: 'text'
    }
);

module.exports = mongoose.model('Todo', TodoModel);
