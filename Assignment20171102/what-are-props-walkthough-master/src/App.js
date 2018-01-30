// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

// Establish a function that we are going to be passing
// into the Todo Component. 
  fun(e){
    alert("We're about to get White Castle");
  }

  handleChange(e){
      console.log(e.target.value)
  }
  handleClick(e){
      e.target.value = ''
  }


  render() {

    return (
/*      
      <div>
        <Todo name="Pick up My cousins kids"
              age="24" data={data}
              alert={this.fun} />
      </div>

      <div>
        <Todo task={this.props.task}
              improtance={this.props.improtance} />
      </div>        

      <div>
        <Todo tasks={this.props.allTasks}
              arr={arr}
              string={string}
              obj={obj} />
      </div>

      // Below is the code which does not display the input message after the
      RING THE ALARM was clicked
      <div>
        <Todo alert={this.fun}/>
        <input onChange={(event)=>this.handleClick(event)} />
        <button onClick={this.fun()}>RING THE ALARM</button>
      </div>
*/
      <div>
        <Todo alert={this.fun} />
        <input onChange={(event)=>this.handleChange(event)} />
        <button onClick={(event)=>this.handleClick(event)}>RING THE ALARM</button>   
      </div>

    );
  }
}

//const arr = [1,2,3,4]
//const string = "The Friend Bar"
//const obj = {'todo': [1,2,3,4]}

// inputting an object.
// const data = {'todo': [1,2,3,4]}

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
/*
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

      task: 'go the store and buy ICE CREAAAM',
      improtance: 1,
      completed: false
*/
App.defaultProps={
  allTasks: [{
  task: 'go to the store and buy ICE CREAAAM',
  improtance: 1,
  completed: false
  }]
}

export default App;
