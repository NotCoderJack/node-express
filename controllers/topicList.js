'use strict'
const dao = require('../dao/topicListDao');
exports.topicList = (req, res, next) => {
    dao.topicList((rs) => {
        //res.json({state: 1, message: 'OK', pageNum: 1, total: rs.length, list: rs});
    });
}
