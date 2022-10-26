import db from '.';

const Spaces = {
  getFirst: () => {
    db.query(
      `SELECT * FROM spaces ORDER BY floor, section`,
      (err, res, field) => {
        console.log(res);
      }
    );
  },
};

export default Spaces;
