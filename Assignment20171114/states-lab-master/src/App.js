import React, { Component } from 'react';
import logo from './logo.svg';
import Comments from './components/comments';
class App extends Component {
  render() {
    return (
      <div>
        <Comments comments={this.props.comments}/>
      </div>
    );
  }
}

App.defaultProps = {
  comments: ['kanye is probably an alien', 'tupac is still alive']
}



export default App;
