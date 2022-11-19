console.log("Cargando configuración...");
// Importar las dependencias
const express = require("express");

// Cargar configuracion app web
const PORT = process.env.PORT || 3000;

console.log("Inicializar la aplicación web...");
const app = express();

console.log("Configurando Routers...");
const userRouter = require("./routes/routerUser");

//Configurar Routers en la APP
// app.use(bodyParser.json());

app.use("/api/usuarios", userRouter);

app.get("/", function (req, res) {
  res.send("Hello 👋!");
});
// app.use("/app", express.static("frontend"));
// app.use("/static", express.static("frontend/static"));

console.log("Iniciando Servidor");
let server = app.listen(PORT, function () {
  console.log(`La aplicación web esta escuchando en: http://localhost:` + PORT);
});
