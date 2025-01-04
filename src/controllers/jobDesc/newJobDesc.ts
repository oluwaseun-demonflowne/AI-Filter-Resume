import { db } from "@/db/connect";
import { jobDescriptionsSchema } from "@/db/schema/description";
import { CreateJobDescriptionBody } from "@/types";
import { type Request, type Response } from "express";

export async function newJobDescription(
  request: Request<object, object, CreateJobDescriptionBody, object>,
  response: Response
): Promise<void> {
  const {
    recruiterId,
    description,
    title,
    experienceRequired,
    location,
    job_requirements,
    keyword
  } = request.body;

  try {
    await db.insert(jobDescriptionsSchema).values({
      description,
      title,
      experienceRequired,
      location,
      recruiterId,
      job_requirements,
      keyword
    });
     response.status(200);
  } catch (error) {
     response.status(500);
  }
}
