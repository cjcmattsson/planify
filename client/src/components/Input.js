import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    action: ""
  }

  addTodo = () => {
    const task = {
      action: {
        todo: this.state.action,
        subTodos: ['2',"1"]
      },
    }

    if(task.action.todo && task.action.todo.length > 0){
      axios.post('/api/todos', task)
        .then(res => {
          if(res.data){
            this.props.getTodos("todos");
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    } else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }

  render() {
    let { action } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} placeholder="Skriv sak att fixa"/>
        <button onClick={this.addTodo}>Lägg till</button>
      </div>
    )
  }
}

export default Input
