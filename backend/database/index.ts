import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.query(
    `CREATE TABLE IF NOT EXISTS users(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`email\` VARCHAR(45) NOT NULL,
        \`password\` VARCHAR(45) NOT NULL,
        \`tokens\` INT NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        UNIQUE INDEX \`email_UNIQUE\` (\`email\` ASC) VISIBLE
    )`
)

connection.query(
    `CREATE TABLE IF NOT EXISTS plates(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`plate_num\` VARCHAR(45) NOT NULL,
        \`user_id\` INT NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        FOREIGN KEY (\`user_id\`) REFERENCES users(\`id\`)
    )`
)

connection.query(
    `CREATE TABLE IF NOT EXISTS garages(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`total_spaces\` INT NOT NULL,
        \`occupied_spaces\` INT NOT NULL,
        \`name\` VARCHAR(45) NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE
    )`
)

connection.query(
    `CREATE TABLE IF NOT EXISTS spaces(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`floor\` INT NOT NULL,
        \`row\` INT NOT NULL,
        \`section\` CHAR NOT NULL,
        \`garage_id\` INT NOT NULL,
        \`parked_user\` INT NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        FOREIGN KEY (\`parked_user\`) REFERENCES users(\`id\`),
        FOREIGN KEY (\`garage_id\`) REFERENCES garages(\`id\`)
    )`
)

export {connection as db} 