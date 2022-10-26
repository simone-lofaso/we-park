import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
});

connection.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'wepark'}`
);

connection.query(`USE ${process.env.DB_NAME || 'wepark'}`);

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
);

connection.query(
  `CREATE TABLE IF NOT EXISTS plates(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`plate_num\` VARCHAR(45) NOT NULL,
        \`user_id\` INT NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        FOREIGN KEY (\`user_id\`) REFERENCES users(\`id\`)
    )`
);

connection.query(
  `CREATE TABLE IF NOT EXISTS garages(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`total_spaces\` INT NOT NULL,
        \`occupied_spaces\` INT NOT NULL,
        \`name\` VARCHAR(45) NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE
    )`
);

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
);

connection.query(
  //use execute if user input, w/ ? instead of arr
  `INSERT INTO spaces(floor, row, section, parked_user, garage_id) values (1, 1, 'A', null, 1), 
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1),
  (1, 1, 'A', null, 1)`
);

export { connection as db };
