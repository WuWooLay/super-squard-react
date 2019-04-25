import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import { RootReducer } from './reducers/';

const store = createStore(RootReducer);
store.subscribe(() => {
	console.log('subscribe store.getState() => ', store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
