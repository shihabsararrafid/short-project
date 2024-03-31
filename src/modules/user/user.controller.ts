import { NextFunction, Request, Response } from "express";
import { LogInUserService, RegisterUserService } from "./user.service";
import { signToken } from "../../utils/jwt";

export const CreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await RegisterUserService(req.body);
    res.status(200).json({
      status: "Success",
      message: "User Created",
      user,
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

export const LogInUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await LogInUserService(req.body);
    const token = await signToken(user);
    console.log(token, "token");
    res.cookie("token", token),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        ///sameSite: process.env.NODE_ENV === "production" ? "None" : undefined,
        signed: true,
      };
    res.status(200).json({
      status: "Success",
      message: "User Logged In",
      user,
      //   token: _setAuthCookie(res, user),
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
