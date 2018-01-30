import React from 'react';



class Todo extends React.Component{

render(){
  return(
    <div>
       <button onClick={(event)=>this.props.alert(event)}>My alert button </button>
       <br /><br />

    </div>
  )


}

}

export default Todo
