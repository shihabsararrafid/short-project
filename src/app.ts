import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRouter from "./modules/user/user.route";
const app: Application = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/v1/user", userRouter);

export default app;
