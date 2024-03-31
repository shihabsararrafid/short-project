import express from "express";
import { validateData } from "../../middleware/validatorSchema";
import { userCreateSchema, userLoginSchema } from "../../schemas/user";
import { CreateUser, LogInUser } from "./user.controller";
import { checkAuth } from "../../middleware/checkAuth";
const userRouter = express.Router();

userRouter.post("/login", validateData(userLoginSchema), LogInUser);
userRouter.post(
  "/register",
  checkAuth(["superadmin"]),
  validateData(userCreateSchema),
  CreateUser,
);

export default userRouter;
