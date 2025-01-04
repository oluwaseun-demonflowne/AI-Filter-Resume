import { db } from "@/db/connect";
import { resumeSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { type Request, type Response } from "express";

export async function getResume(
  request: Request<{ id: string }, object, object, object>,
  response: Response
): Promise<void> {
  const { id } = request.params;
  try {
    const resume = await db.query.resumeSchema.findOne({
      where: eq(resumeSchema.id, id)
    });
    response.status(200).json({ resume });
  } catch (error) {
    response.status(500);
  }
}
