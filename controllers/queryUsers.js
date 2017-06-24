'use strict'
const dao = require('../dao/queryUsersDao');
exports.queryUsers = (req, res, next) => {
    dao.queryUsers((rs) => {
        //res.json({state: 1, message: 'OK', pageNum: 1, total: rs.length, list: rs});
        if (rs.length == 0) {
            res.json({state: 1, message: 'OK', pageNum: 1, total: rs.length, list: rs});
        }
        res.json({status: 1, message: 'OK', list: rs})
    });
}
