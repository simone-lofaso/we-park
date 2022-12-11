/**
 * This module represents the User table.
 */

import { Plate, QueryResult, User } from '../types/database';
import db from '.';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ApiUser } from '../types';

export const asyncQuery = <T extends QueryResult['result']>(
  query: string,
  values?: any
): Promise<QueryResult<T>> => {
  return new Promise<QueryResult<T>>((resolve, reject) => {
    db.execute(query, values, (err, result, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ result: result as T, fields });
      return;
    });
  });
};
const UserTable = {
  register: async (email: string, password: string): Promise<ApiUser> => {
    const { result } = await asyncQuery<ResultSetHeader>(
      `INSERT INTO users(email, password, tokens) values (?,?,10);`,
      [email, password]
    );
    return {
      id: result.insertId,
      email,
      tokens: 10,
      plates: [],
      parkedSpaceId: null,
    };
  },

  changeEmail: (id: number, newEmail: string) => {
    return asyncQuery(`UPDATE users SET email = ? WHERE id = ?`, [
      newEmail,
      id,
    ]);
  },

  changePassword: (id: number, newPassword: string) => {
    return asyncQuery(
      `UPDATE users        SET password = ?        WHERE id = ?`,
      [newPassword, id]
    );
  },

  login: async (email: string, password: string): Promise<ApiUser> => {
    const { result: user } = await asyncQuery<RowDataPacket[]>(
      `SELECT id, email, tokens FROM users WHERE email = '${email}' AND password = '${password}'`
    );
    const { result: plates } = await asyncQuery<RowDataPacket[]>(
      `SELECT * FROM plates WHERE userId=?`,
      [(user[0] as RowDataPacket).id]
    );
    const { result: parkedSpace } = await asyncQuery<RowDataPacket[]>(
      `SELECT id FROM spaces WHERE parkedUserId=?`,
      [(user[0] as RowDataPacket).id]
    );
    return {
      ...(user[0] as Omit<User, 'password'>),
      plates: plates as Plate[],
      parkedSpaceId: parkedSpace[0] ? (parkedSpace[0].id as number) : null,
    };
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

  delete: (id: number) => {
    return asyncQuery(`DELETE FROM users WHERE id=?`, [id]);
  },
  updateCoins: async (id: number, newCoins: number) => {
    return asyncQuery(`UPDATE users SET tokens=? WHERE id=?`, [id, newCoins]);
  },
  execute: db.execute,
};

export default UserTable;
