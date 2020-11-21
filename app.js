const express = require("express");
const { connectDB } = require("./db/connectDb");
require("dotenv").config();

const RouteDb = require("./Route/DB.route");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.use("/", RouteDb);
app.use("/user", RouteDb);

async function connect() {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
  }
}

connect();
