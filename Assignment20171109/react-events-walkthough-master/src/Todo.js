import React from 'react';


class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })
  }

  handleDeleteClick(e){
    // We are going to use the function in our props
    // to pass information back to the parent
    this.props.del(this.props.task);
    this.setState({
      complete: true
    })
  }

render(){

  return(
    !this.state.complete ?
    <div>
      <li>{this.props.task}
        <button onClick={ this.handleDeleteClick }>Delete</button>
        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
      </li>
      <br></br>
      mission not complete
    </div>
    :
    <div>
      <li>{this.props.task}
      </li>
      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
