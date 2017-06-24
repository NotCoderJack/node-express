'use strict'
const dao = require("../dao/waitCheckListDao");
exports.waitCheckList = (req, res, next) => {
    if (req.param('user')) res.json({
        state: 1,
        message: 'OK',
        pageNum: 1,
        total: 20,
        list: [{
            index: 1,
            article: 'http://helo.com',
            site: '新浪',
            entrustTime: '2017-02-10',
            topic: '查询用户',
            user: '豪杰'
        }]
    });
    if (req.param('pageNum')) res.json({
        state: 1,
        message: 'OK',
        pageNum: req.query.pageNum && parseInt(req.query.pageNum) || 1,
        total: 20,
        list: [{
            index: 1,
            article: 'http://helo.com',
            site: '新浪',
            entrustTime: '2017-02-10',
            topic: '分页查询',
            user: '豪杰'
        }]
    })
    res.json({
        state: 1,
        message: 'OK',
        pageNum: req.query.pageNum || 1,
        total: 20,
        list: [{
            index: 1,
            article: 'http://helo.com',
            site: '新浪',
            entrustTime: '2017-02-10',
            topic: '默认',
            user: '豪杰'
        }]
    })
    // dao.waitCheckList((rs) =>{
    //     res.json(rs);
    // })
}
