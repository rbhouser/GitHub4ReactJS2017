import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Require the Provider library from reat-redux-below
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';



// 
ReactDOM.render(
	<Provider>
	   <App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
