/**
 * This module represents the User table.
 */

import { Plate, QueryResult, User } from '../types/database';
import db from '.';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ApiUser } from '../types';

/**
 * Wraps a query in a promise and returns the result and fields.
 */
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

/**
 * Abstraction for the user table.
 */
const UserTable = {
  /**
   * Gets a user by the id.
   */
  get: async (id: number) => {
    const { result: user } = await asyncQuery<RowDataPacket[]>(
      `SELECT id, email, tokens FROM users WHERE id=?`,
      [id]
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
   * Inserts a user into the table and returns it.
   */
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

  /**
   * Changes a user's email.
   */
  changeEmail: (id: number, newEmail: string) => {
    return asyncQuery(`UPDATE users SET email = ? WHERE id = ?`, [
      newEmail,
      id,
    ]);
  },

  /**
   * Chages a user's password.
   */
  changePassword: (id: number, newPassword: string) => {
    return asyncQuery(`UPDATE users SET password = ? WHERE id = ?`, [
      newPassword,
      id,
    ]);
  },

  /**
   * Gets a user based on their email and password.
   */
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
   * Adds a license plate to the user.
   */
  addLicensePlate: (plateNum: string, userId: number) => {
    return asyncQuery('INSERT INTO plates(plateNum, userId) VALUES (?, ?)', [
      plateNum,
      userId,
    ]);
  },

  /**
   * Deletes a user from the db.
   */
  delete: (id: number) => {
    return asyncQuery(`DELETE FROM users WHERE id=?`, [id]);
  },

  /**
   * Updates a user's tokens.
   */
  updateCoins: async (id: number, newCoins: number) => {
    return asyncQuery(`UPDATE users SET tokens=? WHERE id=?`, [newCoins, id]);
  },
};

export default UserTable;
