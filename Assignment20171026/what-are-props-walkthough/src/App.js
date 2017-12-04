// Notice that below, I did not include , {Component} after import
// React

// With Code for allTask
// Removed all previously code which was commented out
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {
fun(e) {
  alert("We're about to get White Caste");
}

handleClick(e){
  console.log(e.target.value)
}

  render (){
    return (
      <div>
        <Todo alert={this.fun} />

        <input onChange={(event)=>this.handleClick(event)}/>

        <button onClick={()=>this.fun()}>RING THE ALARM</button>
      </div>
    );
  }
}

export default App;
