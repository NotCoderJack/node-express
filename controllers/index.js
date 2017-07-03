var path = require('path');
/* GET home page. */
exports.index = function(req, res, next) {
  console.log('request for index');
  //返回指定文件
  //res.sendFile(path.resolve('./public') + '/index.html');
  //渲染页面
  res.render('index', {title: 'node+express', ip: req.ip});
  //返回json数据
  //res.json({name: 'haojie', age: '1993'})
};
