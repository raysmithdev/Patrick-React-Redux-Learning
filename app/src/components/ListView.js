import React from 'react'

const List = ({ todos }) => (
  <div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  </div>
)

export default List
