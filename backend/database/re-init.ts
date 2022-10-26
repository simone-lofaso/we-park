import db from '.';
import dotenv from 'dotenv';

dotenv.config();

db.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME || 'wepark'}`);

db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'wepark'}`);

db.query(`USE ${process.env.DB_NAME || 'wepark'}`);

db.query(
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

db.query(
  `CREATE TABLE IF NOT EXISTS plates(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`plate_num\` VARCHAR(45) NOT NULL,
        \`user_id\` INT NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        FOREIGN KEY (\`user_id\`) REFERENCES users(\`id\`)
    )`
);

db.query(
  `CREATE TABLE IF NOT EXISTS garages(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`total_spaces\` INT NOT NULL,
        \`occupied_spaces\` INT NOT NULL,
        \`name\` VARCHAR(45) NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE
    )`
);

db.query(
  `CREATE TABLE IF NOT EXISTS spaces(
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`floor\` INT NOT NULL,
        \`row\` INT NOT NULL,
        \`section\` CHAR NOT NULL,
        \`garage_id\` INT NOT NULL,
        \`parked_user_id\` INT,
        PRIMARY KEY (\`id\`),
        UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC) VISIBLE,
        FOREIGN KEY (\`parked_user_id\`) REFERENCES users(\`id\`),
        FOREIGN KEY (\`garage_id\`) REFERENCES garages(\`id\`)
    )`
);

db.query("INSERT INTO garages VALUES(1, 20, 0, 'North Garage')");

db.query(
  //use execute if user input, w/ ? instead of arr
  `INSERT INTO spaces(\`floor\`, \`row\`, \`section\`, \`parked_user_id\`, \`garage_id\`) VALUES 
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

db.end((err) => {
  if (err) console.error(err);
});

console.log('Database successfully reset and reinitialized.');
