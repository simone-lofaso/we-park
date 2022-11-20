import { Router } from 'express';
import UserTable from '../database/user';
const router = Router();

router.post('/register', (req, res) => {
  try {
    const { email, password } = req.body;
    UserTable.register(email, password);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e).end();
  }
});

router.post('/login',async (req, res) => {
  const { email, password } = req.body;
  try {
   await UserTable.login(email, password)
    res.status(200).json({email});
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
    
  }
});

export default router;
