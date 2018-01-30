import React from 'react';


class Todo extends React.Component{

	render(){
	  return(
	    <div>
			<h1>{this.props.messages.divine}</h1>
			<h2>{this.props.messages.wizard}</h2>
       	    <button onClick={(event)=>this.props.alert(event)}>My alert button </button>
	    </div>
	  )
	}
}

export default Todo;

