// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  constructor (){
    super();
    
    this.state={
      tasks: ["first", "second","third"],
      input: ''
    }
  }


// Establish a function that we are going to be passing
// into the Todo Component. 
  fun(e){
    alert("We're about to get White Castle");
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks:this.state.tasks.concat([this.state.input]),
      input: ''
    })

  }
  render (){
    let tasks = this.state.tasks.map((task)=>
      <Todo task={task} />
    )
    console.log(this.state)


    return (
      <div>
        
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)} />
          <input type="submit" />
        </form>

        { tasks }

      </div>
    );
  }
}

// inputting an object.
//const data = {'todo': [1,2,3,4]}

// passing an array
// const data = [1,2,3,4]

// passing a number
// const data = 4

// inserting objects within an array
// App.defaultProps=[{
//   name: "whatever",
//   age: 24,
//   single: true
//
// }]

// Just an object with properties
// App.defaultProps={
//   name: "whatever",
//   age: 24,
//   single: true
//
// }

// Passing an object with one key and two elements in an array
App.defaultProps={

  "status": [{
  name: "whatever",
  age: 24,
  single: true
  },
  {
    name: "whomever",
    age: 99,
    single: false
  }]


}

export default App;
