import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
    this.handleClick = this.handleClick.bind(this)
  }


    handleClick(e){
      //We're going to use the function in our props
      //to pass information back to the parent
      e.preventDefault();
      this.setState({
        complete: true
      })
    }

  render() {

    debugger

    return(
    !this.state.complete ?
    <div>
      <li>{this.props.task}

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
    );
  }
 
}



export default Todo;
