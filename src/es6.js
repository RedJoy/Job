//let const 
// {
// 	let name = 'redjoy'
// }
// console.log(name); 

// let name = 'redjoy';
// name = 'hhh';
// console.log(name);


//str
// name = 'redjoy';
// course = 'is cute';
// console.log('hello '+name + ' ' +course);
// console.log(`hello ${name} ${course}`);



// function hello(name) {
// 	console.log(`hello ${name}!`);
// }
// const hellos = (name) => {
// 	console.log(`hello ${name}!`);
// }
// hello('redjoy');
// hellos('redjoy');

// setTimeout(()=> {
// 	console.log('xxx');
// }, 1000);

// const double = x => x*2;
// console.log(double(5));

// const hello = (name='redjoy') => {
// 	console.log(`hello ${name}!`);
// }
// hello();
// hello('cuteBaby');

// function hello(name1,name2) {
// 	console.log(name1,name2);
// }
// arr = ['redjoy','cuteBaby'];
// hello.apply(null,arr);
// hello(...arr);  //展开符 ...

// object
// const obj = { name:'redjoy', sex: 'girl'};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// // [ 'name', 'sex' ]
// // [ 'redjoy', 'girl' ]
// // [ [ 'name', 'redjoy' ], [ 'sex', 'girl' ] ]

// const name = "redjoy";
// const obj = {
// 	name,
// 	[name]: 'hello',
// 	hello:function(){

// 	},
// 	hello1(){

// 	}
// }
// console.log(obj);
// // { name: 'redjoy',
// // redjoy: 'hello',
// // hello: [Function: hello],
// // hello1: [Function: hello1] }


// const obj = { name:'redjoy',sex:'woman'};
// const obj2 = { age:'18'};
// console.log({...obj,...obj2,date:'2017'});
// // { name: 'redjoy', sex: 'woman', age: '18', date: '2017' }

// 批量解构赋值
// const arr = ['hello','redjoy'];
// let arg1 = arr[0];
// let arg2 = arr[1];

// let [arg1,arg2] = arr;
// console.log(arg1,'|',arg2);

// const obj = {name:'redjoy',age:'18'};
// const {name,age} = obj;
// console.log(name,"|",age);

// 类
// class MyApp{
// 	constructor() {
// 		this.name = 'redjoy';
// 	}
// 	sayHello() {
// 		console.log(`hello ${this.name}!`);
// 	}
// }
// const app = new MyApp();
// app.sayHello();


// import {name} from './module1';
// console.log(name);

// import * as mod1 from './module1';  //把所有都import进来
// console.log(mod1);

// const arr = [1,2,3];
// console.log(arr.map(function(v){
// 	return v *2 ;
// }))
// console.log(arr.map(v=>v*2));


