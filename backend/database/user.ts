/**
 * This module represents the User table.
 */

import { db } from '.';

const UserTable = {
  register: (email: string, password: string) => {
    db.execute(
      `INSERT INTO users(email, password, tokens) values '?','?',3);`,
      [email, password]
    );
  },
  execute: db.execute,
};

export default UserTable;
