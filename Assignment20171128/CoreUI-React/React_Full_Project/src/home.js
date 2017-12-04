import React from 'react';
import Buttons from '/views/componets/Buttons';

class Home extends React.component{

	render(){

		//Just like Bootstrap, we can create a container around the
		//Buttons Component so that they look more presentable.
		return(
			<div>
				<div className ="container">
					<Buttons />
				</div>
			</div>
		)
	}
}
export default Home;