import express from "express";
import { validateData } from "../../middleware/validatorSchema";
import { userCreateSchema } from "../../schemas/user";
import { CreateUser, LogInUser } from "./user.controller";
const userRouter = express.Router();

userRouter.post("/login", validateData(userCreateSchema), LogInUser);
userRouter.post("/register", validateData(userCreateSchema), CreateUser);

export default userRouter;
