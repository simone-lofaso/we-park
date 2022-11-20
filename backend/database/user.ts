/**
 * This module represents the User table.
 */

import db from '.';

const UserTable = {
  register: (email: string, password: string) => {
    db.execute(
      `INSERT INTO users(email, password, tokens) values ?,?,3);`,
      [email, password]
    );
  },

  changeEmail: (email: string, newEmail: string) => {
    console.log(email)
    return new Promise((resolve, reject) => {
    db.execute(
    `UPDATE users
      SET email = ?
      WHERE email = ?`,
      [newEmail, email],(error, result) => {
        if(error){
          reject(error)
          return
        }
        resolve(result)
      }
    );
  })
  },

  changePassword: (email: string, newPassword: string) => {
    return new Promise((resolve, reject) => {
      db.execute(
        `UPDATE users
        SET password = ?
        WHERE email = ?`,
        [newPassword, email],(error, result) => {
          if(error){
            reject(error)
            return
          }
          resolve(result)
        }

      );
    })
  },
  login: (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      db.execute(
        `SELECT email FROM users WHERE email = '${email}' AND password = '${password}'`,
        (error, res, field) => {
          if(error){
            reject(error)
            return
          }
          if(!res){
            reject(new Error('User not found'));
            return
          }
          resolve(res)
        }
      )
    })
    
  },
  /**
   * User end needs floor/row/section, db uses some specific id to track space status in backend
   */
  park: (user_id: String, id: String) => {
    db.execute('UPDATE spaces set `parkedUserId` = ? where `id` = ?' ,[user_id, id])
  },
  execute: db.execute,
};

export default UserTable;
