import { z } from "zod";
import { taskCreateSchema, taskUpdateSchema } from "../../schemas/task";
import prisma from "../../../db/prisma";

export const createTaskService = async (
  userId: string,
  data: z.infer<typeof taskCreateSchema>["body"],
) => {
  const task = await prisma.task.create({
    data: { ...data, userId },
  });
  return task;
};
export const getTaskService = async (id: number, userId: string) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
      userId,
    },
  });
  return task;
};
export const getAllTaskService = async (userId: string) => {
  const task = await prisma.task.findMany({
    where: {
      userId,
    },
  });
  return task;
};
export const updateTaskService = async (
  id: number,
  data: z.infer<typeof taskUpdateSchema>["body"],
  userId: string,
) => {
  const task = await prisma.task.update({
    where: {
      id,
      userId,
    },
    data: data,
  });
  return task;
};
export const deleteTaskService = async (id: number, userId: string) => {
  const task = await prisma.task.delete({
    where: {
      id,
      userId,
    },
  });
  return task;
};
