/**
 * This module represents the User table.
 */

import db from '.';

const UserTable = {
  register: (email: string, password: string) => {
    db.execute(
      `INSERT INTO users(email, password, tokens) values '?','?',3);`,
      [email, password]
    );
  },
  /**
   * User end needs floor/row/section, db uses some specific id to track space status in backend
   */
  park: (userId: number, id: number) => {
    db.execute('UPDATE spaces set `parkedUserId` = ? where `id` = ?', [
      userId,
      id,
    ]);
  },
  addLicensePlate: (plateNum: string, userId: number) => {
    db.execute('INSERT INTO plates(plateNum, userId) VALUES (?, ?)', [
      plateNum,
      userId,
    ]);
  },
  execute: db.execute,
};

export default UserTable;
