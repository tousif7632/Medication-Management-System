const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const dbPath = path.join(__dirname, "../meds-buddy.db"); // database

const initializeDB = async () => {
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL
      )
    `);

    const result = await db.all(`PRAGMA table_info(users)`);
    const roleExists = result.some((column) => column.name === "role");

    if (!roleExists) {
      await db.run(
        `ALTER TABLE users ADD COLUMN role TEXT NOT NULL DEFAULT 'patient'`
      );
      console.log("'role' column added to users table");
    }

    return db;
  } catch (e) {
    console.error(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

module.exports = initializeDB;
