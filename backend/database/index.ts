import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.query(
    `CREATE TABLE IF NOT EXISTS users(
        \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
        \`username\` VARCHAR(45) NOT NULL,
        \`password\` VARCHAR(45) NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        UNIQUE INDEX \`username_UNIQUE\` (\`username\` ASC) VISIBLE
    )`
)
export {connection as db} 