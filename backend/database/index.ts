import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
});

connection.query(`USE ${process.env.DB_NAME || 'wepark'}`);

export default connection;
