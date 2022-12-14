const connection = require("./database/");
const express = require("express");
const server = express();
const routes = require("./routes/index.routes");
const cors = require("cors");
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());
server.use(routes);

connection.authenticate()
    .then(() => server.listen(port, () => console.log("running")))
    .catch(e => console.error("Erro ao conectar com a base de dados", e));
