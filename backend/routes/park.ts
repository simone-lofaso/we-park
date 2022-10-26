import { Router } from 'express';
import Spaces from '../database/space';
const router = Router();

router.get('/reccomend', (req, res) => {
  res.json(Spaces.getFirst());
});

export default router;
