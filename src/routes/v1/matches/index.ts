import { getMatch } from "@/controllers/matches";
import { newMatches } from "@/controllers/matches/createMatches";
import { getAllMatches } from "@/controllers/matches/getAllMatchesToAJob";
import { Router } from "express";

const matchesRouter = Router();

matchesRouter.get("/getAllMatches/:id", getAllMatches);
matchesRouter.post("/createMatch", newMatches);
matchesRouter.post("/getMatch/:id", getMatch);

export default matchesRouter;
