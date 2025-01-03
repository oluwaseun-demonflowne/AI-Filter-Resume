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
    await db.query.matchesSchema.findFirst({ where: eq(matchesSchema.id, id) });
    return response.status(200);
  } catch (error) {
    return response.status(500);
  }
}
