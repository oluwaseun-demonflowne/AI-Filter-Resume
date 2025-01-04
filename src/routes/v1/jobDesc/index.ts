import { getJobDesc, newJobDescription } from "@/controllers/jobDesc";
import { Router } from "express";

const jobRouter = Router();

jobRouter.get("/getJobDesc/:id", getJobDesc);
jobRouter.post("/createJobDesc", newJobDescription);

export default jobRouter;
