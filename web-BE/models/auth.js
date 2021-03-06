const connection = require("../config/db_connection");
const sql = require("../config/query");

const authModel = {
  insert: async (username, social) => {
    try {
      const res = await connection.query(sql.insertUser, [username, social]);
      return res[0].insertId;
    } catch (err) {
      console.error(err);
    }
  },
  select: async (username, social) => {
    try {
      const [res] = await connection.query(sql.selectUser, [username, social]);
      return res;
    } catch (err) {
      console.error(err);
    }
  },
  selectAll: async () => {
    try {
      const [res] = await connection.query(sql.selectAllUser);
      return res;
    } catch (err) {
      console.error(err);
    }
  },
  update: () => true,
  delete: () => true,
};

module.exports = authModel;
