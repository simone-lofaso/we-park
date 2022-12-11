import { RowDataPacket } from 'mysql2';
import { asyncQuery } from './user';

/**
 * Abstraction for garage table.
 */
export const Garage = {
  /**
   * Gets a garage by the given id.
   */
  get: async (id: number) => {
    const { result } = await asyncQuery<RowDataPacket[]>(
      `SELECT name FROM garages WHERE id=?`,
      [id]
    );
    return result[0].name as string;
  },
};
