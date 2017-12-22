var React = require('react');
var ReactDom = require ('react-dom');
require('./index.css');

class App extends React.Component {
	render(){
		return ( 
		  <div>
		    Why does app run when using "npm start",<br />
		    but not when using "npm run create"!
		  </div>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);