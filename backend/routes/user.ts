import { Router } from 'express';
const router = Router();
import UserTable from '../database/user';

router.post('/register', (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    UserTable.register(email, password);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  try {
    UserTable.execute(
      `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`,
      (error, results, fields) => {
        error;
        console.log(results);
        fields;
      }
    );
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

export default router;
