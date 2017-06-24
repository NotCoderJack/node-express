'use strict'
const pool = require('./connection');
module.exports = {
    queryUsers: (cb) => {
        pool.getConnection((err, connection) => {
            let sql = 'select id, username from t_user';
            connection.query(sql, (err, result) => {
                cb(result);
            })
        })
    }
}
