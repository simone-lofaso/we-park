import { RowDataPacket } from 'mysql2';
import type { ParkingSpace } from '../types/database';
import { asyncQuery } from './user';

const Spaces = {
  /**
   *
   * @returns a Promise containing the first available floor.
   */
  getFirst: async () => {
    const { result } = await asyncQuery<RowDataPacket[]>(
      `SELECT * FROM spaces WHERE parkedUserId IS NULL ORDER BY floor, section`
    );
    return result[0] as ParkingSpace;
  },
  updateSpot: async (userId: number, spaceId: number) => {
    await asyncQuery(`UPDATE spaces SET parkedUserId=? WHERE id=?`, [
      userId,
      spaceId,
    ]);
  },
};

export default Spaces;
