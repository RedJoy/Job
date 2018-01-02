import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {counter,addBabe,removeBabe} from './index.redux';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter);
function render() {
	ReactDOM.render(<App store={store} addBabe={addBabe} removeBabe={removeBabe}/>, document.getElementById('root'));
}
// registerServiceWorker();

render();

store.subscribe(render);