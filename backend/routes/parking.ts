import { Router } from 'express';
import Spaces from '../database/space';
const router = Router();

// Gets the first available spot
router.get('/recommend', async (req, res) => {
  const { parkedUserId } = await Spaces.getFirst();
  if (parkedUserId !== null) {
    console.error(`parkedUserId is ${parkedUserId}, expected null`);
    res.status(500).json({ message: 'Internal server error' }).end();
    return;
  }
  res
    .status(200)
    .json(await Spaces.getFirst())
    .end();
  return;
});

export default router;
