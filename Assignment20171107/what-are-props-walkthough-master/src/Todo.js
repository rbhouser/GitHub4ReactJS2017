import React from 'react';



class Todo extends React.Component{

	constructor(){
	    super();

	    this.state={
	      complete: false
	    }
	    this.handleClick = this.handleClick.bind(this)
	}
    
    handleClick(event){
      event.preventDefault();
      this.setState({
      complete: true
      })
    }

	render(){
		console.log(this.props)
		return(
		    <div>
		    	<li>{this.props.task}</li>
     	    	{this.state.complete ? <h3>mission complete</h3> : <button onClick={this.handleClick}>complete</button>} 	
		    </div>
		)
	}
}

export default Todo;