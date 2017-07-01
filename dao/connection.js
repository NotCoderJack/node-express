/**
*    haojie create on Jun 17, 2017
*   connection for mysql
*/
'use strict'
var mysql = require('mysql');
var dbConf = require('../conf/db');
//console.log(dbConf);

//create connect pool
var pool = mysql.createPool(dbConf.mysql);

module.exports = pool;

/*
'use strict'
// mongoose
import mongoose from 'mongoose'
import dbConf = require('../conf/db');
mongoose.connect(db.conf.url, {server: {auto_reconnect: true}})
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.once('open', () => {
    console.log('数据库链接成功')
})

db.on('error', (err) =>{
    mongoose.disconnect();
})

db.on('close', () => {
    mongoose.connect(db.conf.url, {server: {auto_reconnect: true}})
})

export default db;
*/
