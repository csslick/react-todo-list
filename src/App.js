import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// some change1
class App extends Component {
  state = {
    items: [
      { id:1, title: 'default title'},
      // { id:2, title: 'make breakast'}
    ],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => { 
    // console.log('handle change')
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updateItems = [...this.state.items, newItem]
    
    this.setState({
      items: updateItems,
      id: uuid(),
      item: '',
      editItem: false
    }, ()=>{ console.log(this.state);})
  }

  clearList = () => { 
    // console.log('clear list')
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => { 
    // console.log(`handle delete ${id}`)
    const filteredItems = this.state.items.filter((item)=>{
      return id !== item.id;
    })
    this.setState({
      items: filteredItems
    })
  }
  
  handleEdit = (id) => { 
    // console.log(`handle edit ${id}`)
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    })
    const selectedItem = this.state.items.find(item => {
      return item.id === id;
    })
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
    console.log(selectedItem, selectedItem);
  }

  render() {

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className='text-center'>Todo Input</h3>
              <TodoInput 
                item={this.state.item} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} 
                editItem={this.state.editItem} 
              />
              <TodoList 
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
