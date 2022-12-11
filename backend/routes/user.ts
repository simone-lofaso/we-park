import { Router } from 'express';
import UserTable from '../database/user';
const router = Router();

// Registers a user.
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

// Logs a user in.
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

// Changes a user's email.
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

// Changes a user's password.
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

// Adds a plate to the user.
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

// Deletes a user.
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

// Update's a user's tokens.
router.post('/update-coins', async (req, res) => {
  const { id, tokens } = req.body;
  try {
    await UserTable.updateCoins(id, tokens);
    res.status(200).end();
  } catch (e) {
    res.status(500).json(e);
  }
});

// Gets a user from their id.
router.post('/get', async (req, res) => {
  const { id } = req.body;
  res.status(200).json(await UserTable.get(id));
});

export default router;
