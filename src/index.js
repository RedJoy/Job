import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';//连接用
import {counter} from './index.redux';
import { 
	BrowserRouter , 
	Route ,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'; //router4

// import App from './App';
// import {counter} from './index.redux';


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter,compose(
	applyMiddleware(thunk),
	reduxDevtools
));

function Add(){
	return <h2>生宝宝</h2>
}
function RemoveBabe(){
	return <h2>不要宝宝</h2>
}

class Test extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		console.log(this.props.location);
		return <h2>测试组件 {this.props.match.params.location}</h2>
	}
}
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li><Link to="/"></Link>我们</li>
					<li><Link to="/addbabe">生宝宝</Link></li>
					<li><Link to="/removebabe">不要宝宝</Link></li>
				</ul>
				{/*只渲染命中的第一个route*/}
				<Switch>
					<Route path='/' exact component={App}></Route>
					<Route path='/addbabe' component={Add}></Route>
					<Route path='/removebabe' component={RemoveBabe}></Route>
					<Route path='/:location' component={Test}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>)
		, document.getElementById('root')
)
