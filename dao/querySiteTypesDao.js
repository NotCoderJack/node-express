'use strict'
const pool = require('./connection');

module.exports = {
    querySiteTypes: function(req, res, next) {
        pool.getConnection(function(err, connection){
            let sql = 'select * from t_sites_type';
            connection.query(sql, function(err, result){
                res.json({status: 0, message: 'OK', list: result});
            });
            connection.release();
        })
    }
}
