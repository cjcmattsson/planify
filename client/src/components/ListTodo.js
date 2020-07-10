import React from 'react';

const ListTodo = ({ todos, deleteTodo, removePermanent }) => {

  return (
    <div>
      <h3>{!removePermanent ? "Att fixa: " : "Färdiga grejer:"}</h3>
      <ul>
        {
          todos &&
          todos.length > 0 ?
          (
            todos.map(todo => {
              return (
                <li key={todo._id} onClick={() => deleteTodo(todo, removePermanent)}>{todo.action.test ? todo.action.test : todo.action}</li>
              )
            })
          )
          :
          (
            <li>{!removePermanent ? "Inget mer att fixa" : "Inga grejer slutförda"}</li>
          )
        }
      </ul>
    </div>
  )
}

export default ListTodo
