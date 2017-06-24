'use strict'
const async = require('async');
const redis = require('redis'),
    client = redis.createClient();
client.on('error', (err) => {
    console.log(err);
})
const r = {
    set: (key, value) => {
        client.set(key, value);
    },
    get: (key, cb) => {
        client.get(key, (err, data) => {
            cb(data);
        })
    },
    hset: (key, field, value) => {
        return client.hset(key, field, value);
    },
    hget: (key, field, cb) => {
        client.hget(key, field, (err, data) => {
            cb(data);
        })
    },
    hdel: (key, field, cb) => {
        client.hdel(key, field, (err, data) => {
            console.log(data);
        })
    },
    hmset: (key,fieldValuePairs) => {
        client.hmset(key, fieldValuePairs);
    },
    hmget: (key, fields, cb) => {
        console.log(fields);
        //这个多字段查询的暂时没有方案
        client.hmget(key, 'age', 'sex', (err, data) => {
            cb(data);
        })
    },
    hgetAll: (key, cb) => {
        client.hgetall(key, (err, data) => {
            cb(data);
        });
    }
}

module.exports = r;
