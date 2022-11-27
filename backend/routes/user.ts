import { Router } from 'express';
import UserTable from '../database/user';
const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserTable.register(email, password);
    res.status(200).json({ ...user });
  } catch (error) {
    const e = error as any;
    if (e.code === 'ER_DUP_ENTRY') {
      res.status(409).end();
      return;
    }
    res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserTable.login(email, password);
    res.status(200).json({ ...user });
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/change-email', async (req, res) => {
  const { id, email } = req.body;
  try {
    await UserTable.changeEmail(id, email);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/change-password', async (req, res) => {
  const { id, password } = req.body;
  try {
    await UserTable.changePassword(id, password);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/add-plate', async (req, res) => {
  const { plateNum, id } = req.body;
  try {
    await UserTable.addLicensePlate(plateNum, id);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await UserTable.delete(id);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

export default router;
