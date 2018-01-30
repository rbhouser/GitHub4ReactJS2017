// Notice that below, I did not include , {Component} after import
// React
import React from 'react';
import styles from './App.css'; 

// we're importing the component from Todo.js
import Todo from './Todo';

var wizard = "You're a wizard";

class App extends React.Component {

// Establish a function that we are going to be passing
// into the Todo Component.
  funMe(e){
    alert("We're about to get White Castle");
  }

  render() {
    return (
      <div>
        <div>
          <h1>Header For Page</h1>
        </div>
        <div>
          <h1>Navigation Bar Buttons</h1>
        </div>
        <div>
          <Todo messages={App.defaultProps}  alert={this.funMe}/>
        </div>  
      </div>
    );
  }
}

var wizard = "You're a wizard";
  
App.defaultProps={
  divine: 'We function as divine beings',
  wizard: wizard
}

// Fix all the errors that are plaguing this application thus far.
// After you're done with that, please follow the instructions below.

// 1. Create some default Props and pass them along to your
// child component.

// 2. Display that content in either an h tag or a p tag.

// 3. Pass the funMe function to your child component and when
// someone clicks on a button, it will show the alert on from this component.

export default App;