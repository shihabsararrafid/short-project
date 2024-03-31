import express from "express";
import {
  CreateTask,
  DeleteTask,
  GetAllTasks,
  GetTask,
  UpdateTask,
} from "./task.controller";
import { validateData } from "../../middleware/validatorSchema";
import {
  taskCreateSchema,
  taskParamSchema,
  taskUpdateSchema,
} from "../../schemas/task";
import { checkAuth } from "../../middleware/checkAuth";
const taskRouter = express.Router();

taskRouter
  .route("/")
  .get(checkAuth(), GetAllTasks)
  .post(
    checkAuth(["receptionist"]),
    validateData(taskCreateSchema),
    CreateTask,
  );
taskRouter
  .route("/:id")
  .get(checkAuth(["receptionist"]), validateData(taskParamSchema), GetTask)
  .patch(
    checkAuth(["receptionist"]),
    validateData(taskUpdateSchema),
    UpdateTask,
  )
  .delete(
    checkAuth(["receptionist"]),
    validateData(taskParamSchema),
    DeleteTask,
  );

export default taskRouter;
