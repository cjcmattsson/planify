const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  action: {
    todo: {
      type: String,
      required: [true, 'The todo text field is required']
    },
    subTodos: [String],
  }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);
const DoneTodo = mongoose.model('doneTodo', TodoSchema);

module.exports = {
    Todo: mongoose.model('todo', TodoSchema),
    DoneTodo: mongoose.model('doneTodo', TodoSchema),
};
