import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {

  state = {
    todos: [],
    doneTodos: []
  }

  componentDidMount(){
    this.getTodos("todos");
    this.getTodos("doneTodos");
  }

  getTodos = (list) => {
    axios.get(`/api/${list}`)
      .then(res => {
        if(res.data){
          console.log(res);
          this.setState({
            [list]: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteTodo = (todo, removePermanent) => {
    if (!removePermanent) {
      axios.delete(`/api/todos/${todo._id}`)
      .then(res => {
        if(res.data){
          this.getTodos("todos")
        }
      })
      .catch(err => console.log(err))
      axios.post('/api/doneTodos', todo)
      .then(res => {
        if(res.data){
          this.getTodos("doneTodos")
        }
      })
      .catch(err => console.log(err))
    } else {
      axios.delete(`/api/doneTodos/${todo._id}`)
      .then(res => {
        if(res.data){
          this.getTodos("doneTodos")
        }
      })
    }
  }

  render() {
    let { todos, doneTodos } = this.state;

    return(
      <div>
        <h1>Fixa inför flytt</h1>
        <Input getTodos={this.getTodos}/>
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} removePermanent={false}/>
        <ListTodo todos={doneTodos} deleteTodo={this.deleteTodo} removePermanent={true}/>
      </div>
    )
  }
}

export default Todo;
