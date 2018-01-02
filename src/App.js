import React, { Component } from 'react';
import {Button,List} from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';


// redux
/*
  1.新建store
  通过reducer建立
  根据旧的state和action 生成新的 state
*/
function counter(state=0,action){
  switch(action.type){
    case '生宝宝':
      return state+1;
    case '不要宝宝了':
      return state-1;
    default:
      return 10;
  }
}

// 新建store
const store = createStore(counter);

const init = store.getState();
console.log(init);
function listener() {
  const current = store.getState();
  console.log(`现在有宝宝${current}个`);
}
// 订阅事件
store.subscribe(listener);

// 派发事件
store.dispatch({type:'生宝宝'});
console.log(store.getState());

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
    console.log('组件初始化');
  }
  componentWillMount() {
    console.log('组件马上就要挂载了');
  }
  componentDidMount() {
    console.log('组件挂载完毕');
  }
  componentWillReceiveProps(nextProps) {
    console.log('组件要接受父组件的值了');
  }
  shouldComponentUpdate() {
    console.log('判断是不是要更新组件');
    return true;  //要返回 true
  }
  componentWillUpdate() {
    console.log('马上就要更新组件了');
  }
  componentDidUpdate() {
    console.log('组件更新完毕');
  }
  componentWillUnmount() {
    console.log('组件卸载了');
  }
  addBabe = ()=>{ 
    console.log('生个宝宝');
    this.setState({
      babes:[...this.state.babes,'三宝'+Math.random()]
    })
  }
  render() {
    console.log('组件正在加载了');
    return (
      <div>
        <h2>其他的例子,{this.props.name}</h2>
        {/*  <button onClick={()=>this.addBabe()}>生宝宝</button>*/}
        <Button type='primary' onClick={this.addBabe}>生宝宝</Button>
        <List renderHeader={()=>'宝宝们'}>
          {this.state.babes.map(v=>{
            return (
              <List.Item key={v}>{v}</List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

function OtherApp1(props) {
  return <h2>其他例子1，{props.name}</h2>
}

export default App;
