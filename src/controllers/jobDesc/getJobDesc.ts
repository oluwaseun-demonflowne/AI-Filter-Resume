import { db } from "@/db/connect";
import { jobDescriptionsSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { type Request, type Response } from "express";

export async function getJobDesc(
  request: Request<{ id: string }, object, object, object>,
  response: Response
): Promise<Response> {
  const { id } = request.params;

  try {
    
    const job = await db.query.jobDescriptionsSchema.findMany({
      where: eq(jobDescriptionsSchema.id, id)
    });
    return response.status(200).json({ job });
  } catch (error) {
    return response.status(500);
  }
}
