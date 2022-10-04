import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { db } from './database';

db;
const port = 8000;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  req;
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Listening on port: ${[port]}`);
});

app.post('/createUser', (req, res) => {
  const {email, password, plates} = req.body
  //insert into db
});