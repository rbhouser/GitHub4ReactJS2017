import React from 'react';


class OneComment extends React.Component{
  render(){

    // Is the property a newcomment?
    // If not, use the original comment
    if (this.props.newcomment){
      var newcomments=
      <div className="box box2 shadow1">
        <h3>{this.props.newcomment}</h3>
      </div>;
    } else {
      var comments=
      <div className="box box1 shadow1">
        <h3>{this.props.comment}</h3>
      </div>;
      
    }

    return (
      <div>
        {newcomments}
        {comments}
      </div>
    )
  }
}

export default OneComment;

{/*
      	<div className="box box1 shadow1">
      	  <h3>{this.props.comment}</h3>
      	</div>
*/}