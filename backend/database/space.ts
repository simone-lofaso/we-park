import db from '.';
import type { ParkingSpace } from '../types/database';

const Spaces = {
  /**
   *
   * @returns a Promise containing the first available floor.
   */
  getFirst: () => {
    return new Promise<ParkingSpace>((resolve, reject) => {
      try {
        db.query(
          `SELECT * FROM spaces WHERE parkedUserId IS NULL ORDER BY floor, section`,
          (err, res, field) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(
              Array.isArray(res)
                ? (res[0] as ParkingSpace)
                : (res as unknown as ParkingSpace)
            );
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  },
};

export default Spaces;
