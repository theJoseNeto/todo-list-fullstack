const { Router } = require("express");

const routes = Router();
const todoCtrl = require("../controllers/todoController");

routes.post("/todos", todoCtrl.store);
routes.get("/todos", todoCtrl.index);
routes.get("/todos/:id", todoCtrl.indexOne);
routes.put("/todos/:id", todoCtrl.update);
routes.delete("/todos/:id", todoCtrl.delet3);
module.exports = routes; 