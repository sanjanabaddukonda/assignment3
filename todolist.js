let mongoose = require('mongoose');
// create a book model
let listModel = mongoose.Schema({
    task: String,
    priority: String,
    due: String
    },
    {
        collection: "list"
    }
);
module.exports = mongoose.model('ToDoList', listModel);

//localhost:3000/todolist
