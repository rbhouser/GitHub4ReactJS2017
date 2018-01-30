// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

//
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // When scoped variable processing executes, it shall process this.handleDelete
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

// Create a function here that deletes the specific task from the App.js State.
handleDelete(event){
  // These console logs are just to make sure that this function is beling called.
  console.log(event);
  console.log(this.state)
  this.setState({
    tasks: this.state.tasks.filter((task)=>task !== event)
  })
}  



  render() {

    let tasks = this.state.tasks.map((task)=>
      <Todo task={task} del={this.handleDelete}/>
    )
    return (
      <div>

        <form onSubmit={(event)=> this.handleSubmit(event)}>

          <input onChange={(event)=>this.handleChange(event)} />
          <input type="submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}



export default App;
