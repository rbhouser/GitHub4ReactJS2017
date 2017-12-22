import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createStore from './createStore';
import manageBand from './reducers/manageBand';

const store = createStore(manageBand);

function render() {
	ReactDOM.render(
	<App store={ store }/>, 
	document.getElementById('root')
	);
}

registerServiceWorker();

export const renderer = { render: render };
