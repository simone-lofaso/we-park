import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { db } from './database';
import UserRouter from './routes/user';

db;
const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1/user/', UserRouter);

app.get('/', (req, res) => {
  req;
  res.json({ message: 'Hello World!' });
});

app.listen(port, process.env.IPHOST || "localhost" , () => {
  console.log(`Listening on port: ${[port]}`);
});
