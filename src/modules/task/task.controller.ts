import { NextFunction, Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  getAllTaskService,
  getTaskService,
  updateTaskService,
} from "./task.service";

export const CreateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await createTaskService(req.user.id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Task Created",
      task,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to Create",
      error: error instanceof Error ? error.message : "Unexpected Error",
    });
  }
  next();
};

export const GetTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const task = await getTaskService(parseInt(id), userId);
    res.status(200).json({
      status: "Success",
      message: "Task Created",
      task,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to Log In",
      error: error instanceof Error ? error.message : "Unexpected Error",
    });
  }
  next();
};
export const GetAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    const task = await getAllTaskService(userId);
    res.status(200).json({
      status: "Success",
      message: "Task List",
      task,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to Load",
      error: error instanceof Error ? error.message : "Unexpected Error",
    });
  }
  next();
};
export const UpdateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const task = await updateTaskService(parseInt(id), req.body, userId);
    res.status(200).json({
      status: "Success",
      message: "Task Updated",
      task,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to Update",
      error: error instanceof Error ? error.message : "Unexpected Error",
    });
  }
  next();
};
export const DeleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const task = await deleteTaskService(parseInt(id), userId);
    res.status(200).json({
      status: "Success",
      message: "Task Deleted",
      task,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to Delete",
      error: error instanceof Error ? error.message : "Unexpected Error",
    });
  }
  next();
};
