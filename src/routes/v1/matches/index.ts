import { getAllMatches, newMatches } from "@/controllers/matches";
import { Router } from "express";

const matchesRouter = Router()

matchesRouter.get("/getAllMatches/:id", getAllMatches)
matchesRouter.post("/createMatch",newMatches)