// Notice that below, I did not include , {Component} after import
// React

// With Code for allTask
// Removed all previously code which was commented out
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  render (){
    return (
      <div>
        <Todo tasks={this.props.allTasks} 
              arr={arr}
              string={string}
              obj={ obj } />
      </div>
    );
  }
}
 const arr = [1,2,3,4]
const string = "The Friend Bar"
const obj = {'todo': [1,2,3,4]}

App.defaultProps={
allTasks: [{
  task: 'go to the store and buy ICE CREAAAM',
  importance: 1,
  completed: false
  }]
}

export default App;
