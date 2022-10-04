const mysql = require('mysql2/promise');
const config = require('../database/index'); //check to see if this actually navs where you want it to

async function query(sql, params){
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}