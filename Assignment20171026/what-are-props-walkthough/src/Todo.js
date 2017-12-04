import React from 'react';



class Todo extends React.Component{

	render(){
	    return(
	    <div>
	    	<button
	    	onclick={(event)=>this.props.alert(event)}>My alert button</button>
	    </div>
	  )
	}

	}

export default Todo
