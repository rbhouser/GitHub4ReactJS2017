import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Navbar, Nav, NavItem} from 'react-bootstrap';
import WeatherFetcher from '../utils/WeatherFetcher';

class MyNavbar extends Component {
	constructor(){
		super();
		this.state={
			value: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	};

	handleChange(event){
		this.setState({value: event.target.value})
	};

	handleClick(){
		//here we're going to be making a change to our URL route.
		//We will be using browserHistory once someone clicks on the
		//"Get Weather" Button.
		WeatherFetcher.fetchFiveDayWeather(this.state.value)
		.then((data) => this.setState({ fiveDayWeather: data.data, loaded: true }));
	};

	componentDidUpdate(){
		if(this.state.loaded){
			debugger
		}
}


	render() {
		return (
			<Navbar className="MyNav">
          		<Navbar.Header>
		            <Navbar.Brand>
		              <a href="/">Weather App</a>
		            </Navbar.Brand>
          		</Navbar.Header>
	          	<Navbar.Collapse>
		            <Nav pullRight>
		              <NavItem>
		                <Form inline className="Form">
		                  <FormGroup controlId="formInlineName">
		                    <FormControl type="text"  placeholder="New York, NY" />
		                    {' '}
		                    <Button bsStyle="success" bsSize="small" onClick={this.handleClick}>Get Weather</Button>
		                  </FormGroup>
		                </Form>
		              </NavItem>
		            </Nav>
	          	</Navbar.Collapse>
        	</Navbar>
		)
	}
}

export default MyNavbar;