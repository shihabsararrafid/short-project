import { z } from "zod";

export const taskCreateSchema = z
  .object({
    body: z.object({
      title: z.string(),
      description: z.string(),
    }),
    params: z.object({}),
    query: z.object({}),
  })
  .strict();
export const taskUpdateSchema = z
  .object({
    body: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }),
    params: z.object({ id: z.coerce.number() }),
    query: z.object({}),
  })
  .strict();
export const taskParamSchema = z
  .object({
    body: z.object({}),
    params: z.object({ id: z.coerce.number() }),
    query: z.object({}),
  })
  .strict();
