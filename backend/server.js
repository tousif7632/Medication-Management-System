const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const initializeDB = require("./config/db");
const userRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let db;

const startServer = async () => {
  try {
    db = await initializeDB();
    app.locals.db = db;

    app.use(
      "/api/users",
      (req, res, next) => {
        req.db = db;
        next();
      },
      userRoutes
    );

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();