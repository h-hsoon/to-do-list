import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      newDescription: ''
    };
  }

  handleAddTask = () => {
    const { newTask, newDescription, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, { task: newTask, description: newDescription }],
        newTask: '',
        newDescription: ''
      });
    }
  };

  handleDeleteTask = (taskToDelete) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskToDelete)
    });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My ToDo List</h1>
          <div className="task-input">
            <input 
              type="text" 
              name="newTask"
              value={this.state.newTask} 
              onChange={this.handleInputChange} 
              placeholder="Enter new task" 
            />
            <textarea 
              name="newDescription"
              value={this.state.newDescription} 
              onChange={this.handleInputChange} 
              placeholder="Enter description" 
            />
            <button onClick={this.handleAddTask}>Add</button>
          </div>
          <ul className="task-list">
            {this.state.tasks.map((task, index) => (
              <li key={index}>
                <div>
                  <strong>{task.task}</strong>
                  <p>{task.description}</p>
                </div>
                <button onClick={() => this.handleDeleteTask(task)}>Done</button>
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
