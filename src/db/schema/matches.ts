import {
  timestamp,
  pgTable,
  pgEnum,
  real,
  uuid
} from "drizzle-orm/pg-core";
import { resumeSchema } from "./resume";
import { jobDescriptionsSchema } from "./description";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const matchStatusEnum = pgEnum("match_status", [
  "pending",
  "reviewed",
  "shortlisted",
  "rejected"
]);
export const matchesSchema = pgTable("matches", {
  id: uuid("id").defaultRandom().unique(),
  resumeId: uuid("resume_id")
    .notNull()
    .references(() => resumeSchema.id, { onDelete: "cascade" }),
  jobId: uuid("job_id")
    .notNull()
    .references(() => jobDescriptionsSchema.id, { onDelete: "cascade" }),
  matchPercentage: real("match_percentage").notNull(),
  status: matchStatusEnum("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type InsertMatchesModel = InferInsertModel<typeof matchesSchema>;
export type SelectMatchesModel = InferSelectModel<typeof matchesSchema>;
