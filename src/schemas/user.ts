import { z } from "zod";

export const userCreateSchema = z
  .object({
    body: z.object({ email: z.string().email(), password: z.string() }),
    params: z.object({}),
    query: z.object({}),
  })
  .strict();
