const users = require("./users.json");
const userStatistic = require("./users_statistic.json");

const sqlite3 = require("sqlite3").verbose();

const nameTableDB = "users_table";
const columnName =
  "id INTEGER, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, ip_address TEXT";

const statisticTable = "statistic_table";
const statisticColumn =
  "user_id INTEGER, date TEXT, page_views NUMBER, clicks NUMBER";

const userGroup = "user_group";
const userGroupColumn = "id, user_id";

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

  db.get(`SELECT * FROM users_table`, [], (err, row) => {
    if (err === null) {
      return;
    } else {
      if (err.message === "SQLITE_ERROR: no such table: users_table") {
        db.run(
          `CREATE table IF NOT EXISTS ${nameTableDB}(${columnName})`,
          [],
          (err) => {
            console.log("TABLE", err);
            if (err === null) {
              users.map((user) => {
                const col = Object.keys(user).join(", ");
                const value = Object.keys(user).fill("?").join(", ");
                db.run(
                  `INSERT INTO ${nameTableDB}(` +
                    col +
                    `) VALUES (` +
                    value +
                    `)`,
                  Object.values(user),
                  (err) => console.log("ERROR_TABS", err)
                );
              });
            }
          }
        );

        db.run(
          `CREATE table IF NOT EXISTS ${statisticTable}(${statisticColumn})`,
          [],
          (err) =>
            userStatistic.map((user) => {
              const col = Object.keys(user).join(", ");
              const value = Object.keys(user).fill("?").join(", ");

              db.run(
                `INSERT INTO ${statisticTable}(` +
                  col +
                  `) VALUES (` +
                  value +
                  `)`,
                Object.values(user),
                (err) => console.log("ERROR_TABS", err)
              );
            })
        );
        db.run(`CREATE table IF NOT EXISTS ${userGroup}(${userGroupColumn}, PRIMARY KEY (${userGroupColumn}),
   FOREIGN KEY (user_id) REFERENCES statistic_table (user_id) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (id) REFERENCES users_table (id) ON DELETE CASCADE ON UPDATE NO ACTION)`);
        return console.error("ERWT", err.message);
      }
    }
  });

  db.close((err) => {
    if (err) {
      return console.error("CLOSED_DB", err.message);
    }
    console.log("Close the database connection.");
  });
}

const dataUser = [];
const dataUserStat = [];

function getAllDb(req, res) {
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

  db.all("SELECT * FROM users_table", [], (err, rows) => {
    rows.forEach((row) => dataUser.push(row));
  });

  db.all("SELECT * FROM statistic_table", [], (err, rows) => {
    const result = dataUser.map((el) => {
      const { page_views, clicks } = rows.reduce(
        (acc, data) => {
          if (el.id === data.user_id) {
            acc.page_views += data.page_views;
            acc.clicks += data.clicks;
          }

          return acc;
        },
        { page_views: 0, clicks: 0 }
      );
      return { ...el, page_views, clicks };
    });
    return res.status(200).json(result);
  });

  db.close((err) => {
    if (err) {
      return console.error("CLOSED_DB", err.message);
    }
    console.log("Close the database connection.");
  });
}

function getUserStat(req, res) {
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

  db.all(
    "SELECT * FROM statistic_table WHERE user_id = ?",
    [req.params.id],
    (err, rows) => {
      return res.status(200).json(rows);
    }
  );

  db.close((err) => {
    if (err) {
      return console.error("CLOSED_DB", err.message);
    }
    console.log("Close the database connection.");
  });
}

module.exports = { connectDB, getAllDb, getUserStat };
