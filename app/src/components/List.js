import React from 'react'

const List = (props) => (
  <div>
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  </div>
)

export default List
