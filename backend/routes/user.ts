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

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await UserTable.login(email, password);
    res.status(200).json({ email });
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/change-email', async (req, res) => {
  const { email, password, newEmail } = req.body;
  try {
    await UserTable.login(email, password);
    const result = await UserTable.changeEmail(email, newEmail);
    console.log(result);
    res.status(200).json({ newEmail });
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/change-password', async (req, res) => {
  const { email, password, newPassword } = req.body;
  try {
    await UserTable.login(email, password);
    const result = await UserTable.changePassword(email, newPassword);
    console.log(result);
    res.status(200).json({ newPassword });
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/add-plate', async (req, res) => {
  const { plateNum, userId } = req.body;
  try {
    UserTable.addLicensePlate(plateNum, userId);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

export default router;
