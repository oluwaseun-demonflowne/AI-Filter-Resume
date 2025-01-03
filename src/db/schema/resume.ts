import { InferInsertModel, type InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const resumeSchema = pgTable("user", {
  id: uuid("id").defaultRandom().unique(),
  file_url: varchar("file_url", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow()
});

export type InsertResumeModel = InferInsertModel<typeof resumeSchema>;
export type SelectResumeModel = InferSelectModel<typeof resumeSchema>;
