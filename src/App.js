import React from 'react';
import ToDoList from './components/TodoList'
import TodoForm from './components/TodoForm'

//dummy to-do data
// const toDos = [
//   {
//     name: 'Add functionality',
//     id: 0,
//     completed: false,
//   },
//   {
//     name: 'Add styling',
//     id: 1,
//     completed: false,
//   },
//   {
//     name: 'Submit project',
//     id: 2,
//     completed: false,
//   }
// ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      toDos: [],
    }
  }

  // class method: Add item
  addItem = (itemName) => {
    const newToDo = {
      name: itemName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      toDos: [...this.state.toDos, newToDo],
    });
  }

  // class method: toggle item
  toggleItem = (itemId) => {
    this.setState({
      toDos: this.state.toDos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item;
        }
      })
    })
  }
  // class method: remove items
  removeItems = () => {
    this.setState({
      toDos: this.state.toDos.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div  className='to-do-app'>
        <h2>To-Do List!</h2>
        <ToDoList toggleItem={this.toggleItem} toDos={this.state.toDos} />
        <TodoForm addItem={this.addItem} removeItems={this.removeItems} />
      </div>
    );
  }
}

export default App;
