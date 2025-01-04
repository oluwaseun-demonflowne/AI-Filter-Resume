import { db } from "@/db/connect";
import { resumeSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { type Request, type Response } from "express";

export async function getAllResume(
  request: Request<{ id: string }, object, object, object>,
  response: Response
): Promise<void> {
  const { id } = request.params;

  try {
    const allResume = await db.query.resumeSchema.findMany({
      where: eq(resumeSchema.id, id)
    });
    response.status(200).json({ allResume });
  } catch (error) {
    response.status(500);
  }
}
