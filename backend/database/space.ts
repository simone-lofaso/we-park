import { RowDataPacket } from 'mysql2';
import type { ParkingSpace } from '../types/database';
import { asyncQuery } from './user';

/**
 * Abstraction for the parking spaces table.
 */
const Spaces = {
  /**
   * Gets the first available parking space by floor.
   */
  getFirst: async () => {
    const { result } = await asyncQuery<RowDataPacket[]>(
      `SELECT * FROM spaces WHERE parkedUserId IS NULL ORDER BY floor, section`
    );
    return result[0] as ParkingSpace;
  },
  /**
   * Sets a parking spot to a user's id.
   */
  updateSpot: async (userId: number, spaceId: number) => {
    await asyncQuery(`UPDATE spaces SET parkedUserId=? WHERE id=?`, [
      userId,
      spaceId,
    ]);
  },
  /**
   * Sets a spot to null based on the spaceId.
   */
  clearSpot: async (spaceId: number) => {
    await asyncQuery(`UPDATE spaces SET parkedUserId=NULL where id=?`, [
      spaceId,
    ]);
  },
};

export default Spaces;
