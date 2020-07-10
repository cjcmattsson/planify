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
                <li key={todo._id} onClick={() => deleteTodo(todo, removePermanent)}>
                  <span>{todo.action.todo}</span>
                  <div>
                    <span className="edit-remove">Ändra</span>
                    <span className="edit-remove">Färdigställ</span>
                  </div>
                </li>
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
