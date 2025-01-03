import { InsertJobDescriptionModel } from "@/db/schema/description";
import { InsertMatchesModel } from "@/db/schema/matches";
import { InsertResumeModel } from "@/db/schema/resume";
import { InsertUserModel } from "@/db/schema/user";

export type CreateResumeBody = Pick<
  InsertResumeModel,
  "email" | "file_url" | "portfolio_url"
>;
export type CreateJobDescriptionBody = Pick<
  InsertJobDescriptionModel,
  | "description"
  | "experienceRequired"
  | "location"
  | "title"
  | "recruiterId"
  | "job_requirements"
  | "keyword"
>;
export type CreateUserBody = Pick<
  InsertUserModel,
  "email" | "fullName" | "passwordHash" | "role"
>;
export type CreateMatchBody = Pick<
  InsertMatchesModel,
  "jobId" | "matchPercentage" | "resumeId" | "status"
>;
