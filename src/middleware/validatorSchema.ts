import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

import { StatusCodes } from "http-status-codes";

export function validateData(schema: z.ZodObject<any, any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.params);
      await schema.parseAsync({
        params: req.params,
        body: req.body,
        query: req.query,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Invalid data", details: errorMessages });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: "Internal Server Error" });
      }
    }
  };
}
