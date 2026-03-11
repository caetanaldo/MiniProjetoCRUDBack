import express from "express";
import taskController from "../controllers/taskcontroller.js";

const tasksRouter = express.Router();

tasksRouter.get('/listar', taskController.list)

tasksRouter.get('/', taskController.getAll)
tasksRouter.get('/:id', taskController.getById)

tasksRouter.post('/', taskController.create)
tasksRouter.put('/:id', taskController.update)
tasksRouter.delete('/:id', taskController.delete)

export default tasksRouter;