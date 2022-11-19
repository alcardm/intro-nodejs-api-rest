const express = require("express");
const router = express.Router();
const db = require("../database.js");

// Leer usuario
router.get("/", function (req, res) {
  res.send("Get a USER");
});

module.exports = router;
