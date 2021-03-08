import React from 'react';
import ToDoList from './components/TodoList'

const toDos = [
  {
    name: 'Add functionality',
    id: null,
    completed: false,
  },
  {
    name: 'Add styling',
    id: null,
    completed: false,
  },
  {
    name: 'Submit project',
    id: null,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      toDos: toDos,
    }
  }

  // class method: Add item
  addItem = (itemName) => {
    
  }
  // class method: toggle item
  toggleItem = (itemId) => {

  }
  // class method: remove items
  removeItems = () => {

  }

  render() {
    return (
      <div>
        <h2>To-Do List!</h2>
        <ToDoList toggleItem={this.toggleItem} toDos={this.state.toDos}/>
      </div>
    );
  }
}

export default App;
