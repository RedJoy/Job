const express = require('express');
const mongoose = require('mongoose');
// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/job';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('mongo connect success');
})
// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
	user: {type:String,require:true},
	age: {type:Number,require:true}
}))
// 新增数据
// User.create({
// 	user:'pengjingjing',
// 	age:0
// },function(err,doc){
// 	if(!err) {
// 		console.log(doc);
// 	}else {
// 		console.log(err);
// 	}
// })


// 从mongo里删除age为0的数据
// User.remove({age:0},function(err,doc){
// 	if(!err) {
// 		console.log('delete success');
// 		User.find({},function(err,doc){
// 			console.log(doc);
// 		})
// 	}
// })

// 更新name 
// User.update({ 'user':'pengyuyan'},{'$set':{age:22}},function(err,doc){
// 	console.log(doc);
// })

// 新建app
const app = express();

app.get('/',function (req,res) {
	res.send('<h1>Hello World</h1>');
})
app.get('/data',function(req,res){
	// 查找全部
	// User.find({},function(err,doc){
	// 	res.json(doc);
	// })
	// 查找redjoy
	// User.find({user:'redjoy'},function(err,doc){
	// 	res.json(doc);
	// })
	// 只查找一条redjoy
	User.findOne({user:'redjoy'},function(err,doc){
		res.json(doc);
	})
	// res.json({name:'redjoy',age:'12'});
})
// app.get()
app.listen(9030,function(){
	console.log('Node app start at port 9030');
})




