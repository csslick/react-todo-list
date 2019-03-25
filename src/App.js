import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// some change1
class App extends Component {
  render() {
    return (
      <>
        <h1>Todo List</h1>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </>
    );
  }
}

export default App;
