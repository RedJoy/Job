import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBabe ,removeBabe ,addBabeAsync } from './index.redux.js';
// import {Button,List} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const title = 'learn';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>现在有babe{this.props.num}个</h3>
        <button onClick={this.props.addBabe}>生宝宝</button>
        <button onClick={this.props.removeBabe}>不要宝宝了</button>
        <button onClick={this.props.addBabeAsync}>慢慢生</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return {num:state}
}
const actionCreators = { addBabe ,removeBabe ,addBabeAsync } ;

App = connect(mapStatetoProps,actionCreators)(App);
export default App;





