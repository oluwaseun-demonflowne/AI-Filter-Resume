import { db } from "@/db/connect";
import { matchesSchema } from "@/db/schema/matches";
import { CreateMatchBody } from "@/types";
import { type Request, type Response } from "express";

export async function newMatches(
  request: Request<object, object, CreateMatchBody, object>,
  response: Response
): Promise<void> {
  const { jobId, matchPercentage, resumeId, status } = request.body;

  try {
    await db
      .insert(matchesSchema)
      .values({ jobId, matchPercentage, resumeId, status });
    response.status(200);
  } catch (error) {
    response.status(500);
  }
}
