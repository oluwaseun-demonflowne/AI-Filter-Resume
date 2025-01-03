import { db } from "@/db/connect";
import { matchesSchema } from "@/db/schema/matches";
import { eq } from "drizzle-orm";
import { type Request, type Response } from "express";

export async function getMatches(
  request: Request<{ id: string }, object, object, object>,
  response: Response
): Promise<Response> {
  const { id } = request.params;

  try {
    const allMatches = await db.query.matchesSchema.findMany({
      where: eq(matchesSchema.jobId, id)
    });
    return response.status(200).json({ allMatches });
  } catch (error) {
    return response.status(500);
  }
}
