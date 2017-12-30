import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';

class App extends Component {
  render() {
    const title = 'learn'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <OtherApp name="彭于晏"></OtherApp>
        <OtherApp1 name="彭于晏&静静"></OtherApp1>
      </div>
    );
  }
}

class OtherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      babes: ['大宝','二宝']
    }
    this.addBabe = this.addBabe.bind(this);//常用绑定this
  }
  addBabe = ()=>{ 
    console.log('生个宝宝');
    this.setState({
      babes:[...this.state.babes,'三宝'+Math.random()]
    })
  }
  render() {
    return (
      <div>
        <h2>其他的例子,{this.props.name}</h2>
        {/*  <button onClick={()=>this.addBabe()}>生宝宝</button>*/}
        <button onClick={this.addBabe}>生宝宝</button>
        <ul>
          {this.state.babes.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

function OtherApp1(props) {
  return <h2>其他例子1，{props.name}</h2>
}

export default App;
