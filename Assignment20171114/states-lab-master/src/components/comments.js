import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComments: ["working?"]

  }
  this.handleInput = this.handleInput.bind(this);
  this.handleClick = this.handleClick.bind(this);
}
//The function we are calling is outside of the constructor method
// Also outside of the render method.
handleInput(e){
  //console.log("Watch out Anonymous. I'm a real hacker")

  this.setState({
    input: e.target.value
  })

  //console.log('handleInput update -' + this.state.input)
}

handleClick(e){
  //e is the event that we need to stop from automtically refreshing in page
  e.preventDefault();
  console.log('I just clicked this thing');

  this.setState({
    newComments: this.state.newComments.concat([this.state.input]),
    input: ''
  })

}

componentDidUpdate(){

  if(this.state.input !== ''){
    console.log('componentDidUpdate log - ' + this.state.input)
  }
}

  render() {
    const comments = 
    this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    const newComments = 
    this.state.newComments.map( (item, index) => <OneComment key={index} newcomment={item} />)

    return (
      <div>
      
        <form>
          <input placeholder="enter comment" onChange={this.handleInput} value={this.state.input} />
          <button onClick={this.handleClick} >Add Comment</button>
        </form>

        <div className="wrap">
            {comments}
        </div>

        <div className="wrap">
            {newComments}
        </div>

      </div>
    );
  }
}

export default Comments;
