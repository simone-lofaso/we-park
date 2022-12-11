import { Garage } from '../database/garage';
import { Router } from 'express';
import Spaces from '../database/space';
const router = Router();

// Gets the first available spot
router.post('/recommend', async (req, res) => {
  const { id: userId } = req.body;
  const space = await Spaces.getFirst();
  const name = await Garage.get(userId);
  res.status(200).json({ space, name });
});

router.post('/parked', async (req, res) => {
  const { id: userId, spaceId } = req.body;
  await Spaces.updateSpot(userId, spaceId);
  res.status(200).end();
});

export default router;
