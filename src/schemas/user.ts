import { z } from "zod";

export const userCreateSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .strict();
