import React, { Component } from 'react';
// import {Button,List} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
import logo from './logo.svg';
import './App.css';
// import {addBabe} from './index.redux';
// import {createStore} from 'redux';


// // redux
// /*
//   1.新建store
//   通过reducer建立
//   根据旧的state和action 生成新的 state
// */
// function counter(state=0,action){
//   switch(action.type){
//     case '生宝宝':
//       return state+1;
//     case '不要宝宝了':
//       return state-1;
//     default:
//       return 10;
//   }
// }

// // 新建store
// const store = createStore(counter);

// const init = store.getState();
// console.log(init);
// function listener() {
//   const current = store.getState();
//   console.log(`现在有宝宝${current}个`);
// }
// // 订阅事件
// store.subscribe(listener);

// // 派发事件
// store.dispatch({type:'生宝宝'});
// console.log(store.getState());

class App extends Component {
  render() {
    const title = 'learn';
    const store = this.props.store;
    const num = store.getState();
    const addBabe = this.props.addBabe;
    const removeBabe = this.props.removeBabe;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>现在有babe{num}个</h3>
        <button onClick={()=>store.dispatch(addBabe())}>生宝宝</button>
        <button onClick={()=>store.dispatch(removeBabe())}>不要宝宝了</button>
      </div>
    );
  }
}

export default App;
