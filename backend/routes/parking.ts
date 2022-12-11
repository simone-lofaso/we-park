import { Garage } from '../database/garage';
import { Router } from 'express';
import Spaces from '../database/space';
const router = Router();

// Gets the first available space.
router.post('/recommend', async (req, res) => {
  const { id: userId } = req.body;
  const space = await Spaces.getFirst();
  const name = await Garage.get(space.garageId);
  res.status(200).json({ space, name });
});

// Parks a user with the given id and spaceId.
router.post('/parked', async (req, res) => {
  const { id: userId, spaceId } = req.body;
  await Spaces.updateSpot(userId, spaceId);
  res.status(200).end();
});

// Clears a userId in the given parking space.
router.post('/leaving', async (req, res) => {
  const { spaceId } = req.body;
  await Spaces.clearSpot(spaceId);
  res.status(200).end();
});

export default router;
