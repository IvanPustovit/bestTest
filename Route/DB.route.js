const express = require("express");
const { getAllDb, getUserStat } = require("../db/connectDb");

const router = express.Router();

router.get("/allUser", (req, res) => {
  getAllDb(req, res);
});

router.get("/:id", (req, res) => {
  getUserStat(req, res);
});

module.exports = router;
