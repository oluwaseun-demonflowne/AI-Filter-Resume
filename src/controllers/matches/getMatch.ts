import { db } from "@/db/connect";
import { matchesSchema } from "@/db/schema/matches";
import { eq } from "drizzle-orm";
import { type Request, type Response } from "express";

export async function getMatch(
  request: Request<{ id: string }, object, object, object>,
  response: Response
): Promise<Response> {
  const { id } = request.params;

  try {
    const match = await db.query.matchesSchema.findOne({
      where: eq(matchesSchema.id, id)
    });
    return response.status(200).json({ match });
  } catch (error) {
    return response.status(500);
  }
}
