import { db } from "@/db/connect";
import { resumeSchema } from "@/db/schema";
import { CreateResumeBody } from "@/types";
import { type Request, type Response } from "express";

export async function newResume(
  request: Request<object, object, CreateResumeBody, object>,
  response: Response
): Promise<void> {
  const { email, file_url, portfolio_url } = request.body;

  try {
    await db.insert(resumeSchema).values({ email, file_url, portfolio_url });
    response.status(200);
  } catch (error) {
    response.status(500);
  }
}
