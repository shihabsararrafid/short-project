import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./modules/user/user.route";
import taskRouter from "./modules/task/task.route";
const app: Application = express();
app.use(cookieParser("510bfab8589cb8799ef2"));
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

export default app;
