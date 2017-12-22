var React = require('react');
var ReactDOM = require('react0DOM');

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(name){
            return <li>{name}</li>
        {/*Create an <li> for every name in the list array*/}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);