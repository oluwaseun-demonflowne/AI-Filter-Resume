import { db } from "$/db/connect";
import { jobDescriptionsSchema } from "$/db/schema/description";
import { CreateJobDescriptionBody } from "$/types";
import { type Request, type Response } from "express";

export async function newJobDescription(
  request: Request<object, object, CreateJobDescriptionBody, object>,
  response: Response
): Promise<Response> {
  const { recruiterId, description, title, experienceRequired, location } =
    request.body;

  try {
    await db.insert(jobDescriptionsSchema).values({
      description,
      title,
      experienceRequired,
      location,
      recruiterId
    });
    return response.status(200);
  } catch (error) {
    return response.status(500);
  }
}
