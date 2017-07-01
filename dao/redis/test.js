/*
*   test demo for redis
*/
const client = require('./index');
client.set('helo', 'world');
client.get('helo', (rs) => {
    console.log(rs);
})

client.hset('hash', 'name', 'haojie');
client.hget('hash', 'name', (rs) => {
    console.log(rs);
})
client.hgetAll('hash', (rs) => {
    console.log(rs);
})
client.hmset('hash', {age: 10, sex: 'male'});
client.hmget('hash', ['age', 'sex'], (rs) => {
    console.log(rs);
});
client.hdel('hash', 'age');
