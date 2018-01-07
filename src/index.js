import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';//连接用
import {counter} from './index.redux';
// import registerServiceWorker from './registerServiceWorker';


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter,compose(
	applyMiddleware(thunk),
	reduxDevtools
));

ReactDOM.render(
	(<Provider store={store}>
		<App />
	</Provider>)
		, document.getElementById('root')
)
// registerServiceWorker();
