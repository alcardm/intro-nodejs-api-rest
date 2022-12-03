const express = require("express");
const router = express.Router();
const db = require("../database.js");

// Leer usuario
router.get("/get/:idUsuario", function (req, res) {
  let idUsuario = req.params.idUsuario;
  let usuario = db.getUser(idUsuario);
  res.json(usuario);
  res.status(200);
});

// Crear usuario
router.post("/create", function (req, res) {
  let newUser = req.body;
  let id = db.createUser(newUser);
  res.send(id);
});

// Eliminar usuario
router.delete("/delete/:idUsuario", function (req, res) {
  let idUsuario = req.params.idUsuario;
  db.deleteUser(idUsuario);
  res.send("El usuario ha sido eliminado.");
  res.status(200);
});

module.exports = router;
