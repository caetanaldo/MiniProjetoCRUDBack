import Tasks from "../models/Tasks";

const taskController = {

    //  Buscar todos os tasks
    getAll: async (req, res) => {
        try {
            const tasks = await Tasks.findAll();

            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    //  Buscar task por ID
    getById: async (req, res) => {
        try {
            const { id } = req.params;

            const task = await Tasks.findByPk(id);

            if (!task) {
                return res.status(404).json({ message: "Tarefa não encontrada" });
            }

            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    //  Criar task
    create: async (req, res) => {
        try {
            const { title, description, completed } = req.body;

            const task = await Tasks.create({
                title,
                description,
                completed
            });
            ;

            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    // ✏ Atualizar task
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description, completed } = req.body;

            const task = await Tasks.findByPk(id);

            if (!task) {
                return res.status(404).json({ message: "Tarefa não encontrada" });
            }

            await task.update({
                title,
                description,
                completed
            });

            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    // Deletar task
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const task = await Tasks.findByPk(id);

            if (!task) {
                return res.status(404).json({ message: "Tarefa não encontrada" });
            }

            await task.destroy();

            return res.status(200).json({ message: "Tarefa deletada com sucesso" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
// Listar produtos com filtros
    list: async (req, res) => {
        try {
            const{title, description, completed} = req.query;
            const where = {};
            const Op = require("sequelize").Op;

            if (title) where.title = { [Op.like]: `%${title}%` };
            if (description) where.description = { [Op.like]: `%${description}%` };
            if (completed !== undefined) where.completed = completed;

            const tasks = await Tasks.findAll({
                where
            });
            
            res.json({sucess: true, data: products});
        } catch (err) {
            res.status(500).json({success: false, error: err.message});
        }
    }
};

export default taskController;