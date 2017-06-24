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
