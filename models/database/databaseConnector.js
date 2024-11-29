const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password : 'Sahil@8237',
    host : '127.0.0.1',
    port : 5432,
    database : 'node_local_database'
});

module.exports = pool;