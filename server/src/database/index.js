const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);
const TodoModel = require("../models/TodoModel");

TodoModel.init(connection);

module.exports = connection;