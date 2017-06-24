'use strict'
const dao = require('../dao/querySiteTypesDao');
console.log(dao);
exports.querySiteTypes = (req, res, next) => {
    dao.querySiteTypes(req, res, next);
}
