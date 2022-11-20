import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import UserRouter from './routes/user';
import ParkingRouter from './routes/parking';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1/user/', UserRouter);
app.use('/api/v1/parking', ParkingRouter);
app.get('/', (req, res) => {
  req;
  res.json({ message: 'Hello World!' });
});

export default app;
