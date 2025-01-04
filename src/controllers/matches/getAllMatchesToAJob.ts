import { db } from "@/db/connect";
import { matchesSchema } from "@/db/schema/matches";
import { eq } from "drizzle-orm";
import { type Request, type Response } from "express";

export async function getAllMatches(
  request: Request<{ id: string }, object, object, object>,
  response: Response
): Promise<void> {
  const { id } = request.params;

  try {
    const allMatches = await db.query.matchesSchema.findMany({
      where: eq(matchesSchema.jobId, id)
    });
    response.status(200).json({ allMatches });
  } catch (error) {
    response.status(500);
  }
}
