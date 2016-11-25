import React, { Component } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import List from './components/List'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  addToDo(text) {
    const todo = {text: text, id: window.id++}
    this.state.todos.push(todo)
    return this.setState({todos: this.state.todos})
  }

  render() {
    return (
      <div className="App">
        <AddToDo addToDo={this.addToDo.bind(this)} />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App
