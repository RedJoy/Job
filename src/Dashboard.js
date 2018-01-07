import React,{Component} from 'react';
import { Link ,Route,Redirect } from 'react-router-dom';
import App from './App';
import { connect } from 'react-redux';
import { logout } from './Auth.redux';


function Add(){
	return <h2>生宝宝</h2>
}
function RemoveBabe(){
	return <h2>不要宝宝</h2>
}

@connect(
	state=>state.auth,
	{logout}
)

class Dashboard extends Component {
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props);
		const app = (
				<div>
					{this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null }
					<ul>
						<li><Link to="/dashboard/"></Link>我们</li>
						<li><Link to="/dashboard/addbabe">生宝宝</Link></li>
						<li><Link to="/dashboard/removebabe">不要宝宝</Link></li>
					</ul>
					<Route path='/dashboard/' component={App}></Route>
					<Route path='/dashboard/' component={Add}></Route>
					<Route path='/dashboard/' component={RemoveBabe}></Route>
				</div>
			);
		const redirectToLogin = <Redirect to="/login"></Redirect>
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard;