const TodoModel = require("../models/TodoModel");

module.exports = {
    store: async (req, res) => {
        const { description } = req.body;
        await TodoModel.create({ description });
        return res.json({ description, status: "todo has created" })
    },
    index: async (req, res) => {
        const todoList = await TodoModel.findAll();
        return res.json(todoList);
    },

    indexOne: async (req, res) => {
        const { id } = req.params;
        const todo = await TodoModel.findByPk(id);
        return res.json(todo);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { description } = req.body
        const todoUpdated = await TodoModel.update({ description }, { where: { id } });
        return res.json({ todoUpdated });
    },

    delet3: async (req, res) => {
        const { id } = req.params;
        TodoModel.destroy({
            where: { id }
        }).then(() => res.json({ task: "deleted" }))
    }



}