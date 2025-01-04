
import { getAllResume, getResume, newResume } from "@/controllers/resume";
import { Router } from "express";

const resumeRouter = Router();

resumeRouter.post("/newResume", newResume);
resumeRouter.get("/getAllResume/:id", getAllResume);
resumeRouter.get("/getResume/:id", getResume);

export default resumeRouter;
