import React, { Component } from 'react'
import './App.css'
import AddToDo from './containers/AddToDo'
import List from './containers/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo />
        <List />
      </div>
    );
  }
}

export default App
