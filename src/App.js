import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const thingsToDo = [
  {
    task: 'Mow the lawn',
    id: 1,
    completed: false
  },
  {
    task: 'Pickup dry cleaning',
    id: 2,
    completed: false
  },
  {
    task: 'Take dog to groomer',
    id: 3,
    completed: false
  },
  {
    task: 'Wash car',
    id: 4,
    completed: false
  },
  {
    task: 'Pickup groceries',
    id: 5,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      myList: thingsToDo
    }
  };
  
// Add class methods to update state
  // add new item to the list of items
  addNewToDo = newItem => {
    const newTask = {
      ...this.state,
      myList: [
        ...this.state.myList,
        {
          task: newItem,
          id: Date.now(),
          completed: false
        }
      ]
    }
    this.setState(newTask);
  };

  // setup toggle for selected item
  toggleItem = id => {
    console.log(id);
    const toggleTask = {
       ...this.state,
       myList: this.state.myList.map(item => {
         if (item.id === id) {
           return {
             ...item,
             completed: !item.completed
           }
         }
         return item;
       })
    }
    this.setState(toggleTask);
  };

  // clear the todo from the list
  clearItem = () => {
    const clearTask = {
      ...this.state,
      myList: this.state.myList.filter(item => {
        return !item.completed;
      })
    }
    this.setState(clearTask);
  };


  render() {
    return (
      <div>
        <h2>Kiran's Todo App!</h2>
        <TodoForm 
          addNewToDo={this.addNewToDo}
          clearItem={this.clearItem}
        />
        <TodoList 
          itemList={this.state.myList}
          toggleItem={this.toggleItem}          
        />
      </div>
    );
  }
}

export default App;
