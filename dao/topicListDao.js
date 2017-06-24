'use strict'
const pool = require('./connection');
module.exports = {
    topicList: (cb) => {
        pool.getConnection((err, connection) => {
            let sql = 'select * from op_topic_site_stat cross join t_user where op_topic_site_stat.id = t_user.id';
            connection.query(sql, (err, result) => {
                cb(result);
            })
        })
    }
}
