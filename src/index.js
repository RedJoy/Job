import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './Auth';
import Dashboard from './Dashboard';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';//连接用
import reducers from './reducers';
import { 
	BrowserRouter , 
	Route ,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'; //router4
import './config';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	reduxDevtools
));
console.log(store.getState());

/*
登录 未登录统一跳转到login
导航+显示+注销
router+redux
*/
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			{/*只渲染命中的第一个route*/}
			<Switch>
				<Route path='/login' exact component={Auth}></Route>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Redirect to='/dashboard' component={Dashboard}></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>)
		, document.getElementById('root')
)
