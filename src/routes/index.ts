import { Request, Response, Router } from "express";
import jobRouter from "./v1/jobDesc";
import matchesRouter from "./v1/matches";
import resumeRouter from "./v1/resume";

const mainRoute = Router();
mainRoute.use("/jobDesc", jobRouter);
mainRoute.use("/matches", matchesRouter);
mainRoute.use("/resume", resumeRouter);
// mainRoute.use("/jobDesc",jobRouter)

mainRoute.all("*", (_req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found under /api/v1" });
});

export default mainRoute;
