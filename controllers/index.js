var path = require('path');
var UserModel = require('../models/Users/Users');


/* GET home page. */
exports.index = function(req, res, next) {
  console.log('request for index');
  //返回指定文件
  //res.sendFile(path.resolve('./public') + '/index.html');
  //渲染页面
  console.log(req.ip);
  const name = UserModel.find({name: 'haojie'});
  res.render('index', {title: 'node+express', name: name});
  //返回json数据
  //res.json({name: 'haojie', age: '1993'})
};
