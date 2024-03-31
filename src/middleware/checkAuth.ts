import { NextFunction, Request, Response } from "express";

import { verifyToken } from "../utils/jwt";
import { payLoadType } from "../modules/types/payloadType";

export const checkAuth = (types?: string[], required = true) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req);
      const token = req.cookies.token;
      console.log("token", token);
      if (!token)
        if (required) throw new Error("You Are Unauthorized");
        else return next();
      const payload = await verifyToken(token);
      const { id, email } = payload as payLoadType;
      req.user = { id, email };

      return next();
      // createHttpError(401, "Not authorized");
    } catch (error) {
      next(error);
    }
  };
};
