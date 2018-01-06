import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {counter,addBabe,removeBabe,addBabeAsync} from './index.redux';
// import registerServiceWorker from './registerServiceWorker';


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter,compose(
	applyMiddleware(thunk),
	reduxDevtools
));
function render() {
	ReactDOM.render(<App store={store} addBabe={addBabe} removeBabe={removeBabe} addBabeAsync={addBabeAsync}/>, document.getElementById('root'));
}
// registerServiceWorker();

render();

store.subscribe(render);