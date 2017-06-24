var index = require('../controllers/index.js').index;
// var users = require('../controllers/users.js');
// var isLogin = require('../controllers/isLogin.js').isLogin;
// var querySiteTypes = require('../controllers/querySiteTypes').querySiteTypes;
// var topicList = require('../controllers/topicList').topicList;
// var waitCheckList = require('../controllers/waitCheckList').waitCheckList;
// var queryUsers = require('../controllers/queryUsers').queryUsers;
// var confirmSend = require('../controllers/confirmSend').confirmSend;
module.exports = function(app){
    app.get('/', index);
    //FOLLOWING ARE TEST APIS
    // app.get('/users', users.users);
    // app.get('/isLogin.do', isLogin);
    // app.get('/detail/siteType.do', querySiteTypes);
    // app.get('/topicList', topicList);
    // app.get('/waitCheckList', waitCheckList);
    // app.get('/queryUsers', queryUsers);
    // app.get('/confirmSend', confirmSend);

}
