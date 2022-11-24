/**
 * This module represents the User table.
 */

import { QueryResult } from '../types';
import db from '.';

const asyncQuery = (query: string, values?: any): Promise<QueryResult> => {
  return new Promise<QueryResult>((resolve, reject) => {
    db.execute(query, values, (err, result, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ result, fields });
      return;
    });
  });
};
const UserTable = {
  register: (email: string, password: string) => {
    return asyncQuery(
      `INSERT INTO users(email, password, tokens) values ?,?,3);`,
      [email, password]
    );
  },

  changeEmail: (email: string, newEmail: string) => {
    return asyncQuery(`UPDATE users      SET email = ?      WHERE email = ?`, [
      newEmail,
      email,
    ]);
  },

  changePassword: (email: string, newPassword: string) => {
    return asyncQuery(
      `UPDATE users        SET password = ?        WHERE email = ?`,
      [newPassword, email]
    );
  },
  login: (email: string, password: string) => {
    return asyncQuery(
      `SELECT email FROM users WHERE email = '${email}' AND password = '${password}'`
    );
  },
  /**
   * User end needs floor/row/section, db uses some specific id to track space status in backend
   */
  park: (userId: number, id: number) => {
    return asyncQuery('UPDATE spaces set `parkedUserId` = ? where `id` = ?', [
      userId,
      id,
    ]);
  },
  addLicensePlate: (plateNum: string, userId: number) => {
    return asyncQuery('INSERT INTO plates(plateNum, userId) VALUES (?, ?)', [
      plateNum,
      userId,
    ]);
  },
  execute: db.execute,
};

export default UserTable;
