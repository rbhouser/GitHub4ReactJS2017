// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ' '
    }
  }
// Establish a function that we are going to be passing
// into the Todo Component. 
/*  

  fun(e){
    alert("We're about to get White Castle");
  }
*/

  handleChange(event){
    event.preventDefault();
    this.setState({
      input:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: ''
    })

  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: ''
    })
  }

  render() {
    console.log(this.state);

    let tasks = this.state.tasks.map((task,index)=>
      //We're passing in attributes into the Todo Component
      <Todo task={task} index={index}/> 
    )

    return (
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={(event)=> this.handleChange(event)} />
          <input type="submit"/>
        </form>

        {tasks}

      </div>

    );
  }
}

App.defaultProps={

}

export default App;