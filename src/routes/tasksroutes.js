import express from "express";
import tasksController from "../controllers/tasksController.js";

const tasksRouter = express.Router();

tasksRouter.get('/', tasksController.getAll)
tasksRouter.get('/:id', tasksController.getById)
tasksRouter.post('/', tasksController.create)
tasksRouter.put('/:id', tasksController.update)
tasksRouter.delete('/:id', tasksController.delete)

export default tasksRouter;