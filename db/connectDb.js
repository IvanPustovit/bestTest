// const { OPEN_CREATE, OPEN_READWRITE } = require("sqlite3");
const users = require("./users.json");
const userStatistic = require("./users_statistic.json");
// console.log(users);

const sqlite3 = require("sqlite3").verbose();

const nameTableDB = "users_table";
const columnName =
  "id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, ip_address TEXT";

const statisticTable = "statistic_table";
const statisticColumn =
  "user_id INTEGER PRIMARY KEY, date TEXT, page_views NUMBER, clicks NUMBER";

const userGroup = "user_group";
const userGroupColumn = "id INTEGER,user_id INTEGER";

function connectDB() {
  const db = new sqlite3.Database(
    "./users.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        return console.error("BASE_OPEN", err.message);
      }
      console.log("Connected to the in-users SQlite database.");
    }
  );

  // const i = db.run(`CREATE table IF NOT EXISTS ${nameTableDB}(${columnName})`);
  // console.log(i);

  // const res = db.run(`PRAGMA table_info(${nameTableDB})`, [], (err, rest) => {
  //   console.log("ERR", err);
  //   console.log("REST", rest);
  // });

  // console.log(res);

  const r = db.get(`SELECT * FROM users_table`, [], (err, row) => {
    if (err.message === "SQLITE_ERROR: no such table: users_table") {
      db.run(`CREATE table IF NOT EXISTS ${nameTableDB}(${columnName})`);
      db.run(
        `CREATE table IF NOT EXISTS ${statisticTable}(${statisticColumn})`
      );
      db.run(`CREATE table IF NOT EXISTS ${userGroup}(${userGroupColumn})`);
      return console.error("ERWT", err.message);
    }
    console.log("RRRR", row);
  });

  // db.run(
  // `CREATE table IF NOT EXISTS ${nameTableDB}(${columnName})`,

  // (err, result) => {
  //   console.log("ERROR_CREATE", err);
  //   if (err === null) {
  //     console.log("RESULT");
  //     users.map((user) => {
  //       const col = Object.keys(user).join(", ");
  //       const value = Object.keys(user).fill("?").join(", ");
  //       // db.run(
  //       //   `INSERT INTO ${nameTableDB}(` + col + `) VALUES (` + value + `)`,
  //       //   Object.values(user),
  //       //   (err) => console.log("ERROR_TABS", err)
  //       // );

  //     db.run(
  //   `CREATE table IF NOT EXISTS ${statisticTable}(${statisticColumn})`,
  //       //   (err) => {
  // userStatistic.map((user) => {
  //   const col = Object.keys(user).join(", ");
  //   const value = Object.keys(user).fill("?").join(", ");

  //   db.run(
  //     `INSERT INTO ${statisticTable}(` + col + `) VALUES (` + value + `)`,
  //     Object.values(user),
  //     (err) => console.log("ERROR_TABS", err)
  //   );
  // });
  //       //   }
  //       // );
  //     });
  //   }
  // }
  // );

  db.close((err) => {
    if (err) {
      return console.error("CLOSED_DB", err.message);
    }
    console.log("Close the database connection.");
  });
}

module.exports = connectDB;
