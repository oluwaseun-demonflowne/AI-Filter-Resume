import { InsertJobDescriptionModel } from "$/db/schema/description";
import { InsertResumeModel } from "$/db/schema/resume";
import { InsertUserModel } from "$/db/schema/user";

export type CreateResumeBody = Pick<InsertResumeModel, "email" | "file_url">;
export type CreateJobDescriptionBody = Pick<
  InsertJobDescriptionModel,
  "description" | "experienceRequired" | "location" | "title" | "recruiterId"
>;
export type CreateUserBody = Pick<
  InsertUserModel,
  "email" | "fullName" | "passwordHash" | "role"
>;
