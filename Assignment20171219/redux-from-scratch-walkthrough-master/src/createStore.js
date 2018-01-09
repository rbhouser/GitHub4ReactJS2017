import { renderer } from './index.js'

export default function createStore(reducer) {
	// We're defining a new varible called state where we
	// are going to set to be equalto the state in our reducer
	let state;

	function dispatch(action) {
	  // reducer() is referring	to the reducer manageBand.js.
	  // in index.js, wehave called createStore(manageBand).
	  // Reducer is just the variable we have used in place of manageBand.
	  state = reducer(state, action);

	  console.log('create store', state)
	  renderer.render();
	}
	
	function getState(){
		// the state has already been set once a dispatch has been called.
		   return state;
	}

	return {
		dispatch,
		getState,
	};

}