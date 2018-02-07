// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  render (){
    debugger
    return (
      <div>        
        <Todo data={this.props.task} 
          importance={this.props.importance}
            />
      </div> 
     );
  }
}

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
  task: 'go to the store and buy ICE CREAAAM',
  importance: 1,
  completed: false
}

export default App;
