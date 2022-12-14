const { Router } = require("express");

const routes = Router();
const todoCtrl = require("../controllers/todoController");

routes.post("/todo", todoCtrl.store);
routes.get("/todo", todoCtrl.index);
routes.get("/todo/:id", todoCtrl.indexOne);
routes.put("/todo/:id", todoCtrl.update);
routes.delete("/todo/:id", todoCtrl.delet3);
module.exports = routes; 