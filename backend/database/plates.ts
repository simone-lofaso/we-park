/**
 * Module representing the plates table
 */

import db from '.';

const PlatesTable = {
  register: (plate_num: string) => {
    db.execute(`INSERT INTO plates(plate_num) values '?');`, [plate_num]);
  },
  execute: db.execute,
};
export default PlatesTable;
