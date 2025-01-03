import {
  integer,
  varchar,
  text,
  timestamp,
  pgTable,
  uuid,
  json
} from "drizzle-orm/pg-core";
import { userSchema } from "./user";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const jobDescriptionsSchema = pgTable("job_descriptions", {
  id: uuid("id").defaultRandom().unique(),
  recruiterId: uuid("recruiter_id")
    .notNull()
    .references(() => userSchema.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  location: varchar("location", { length: 255 }),
  experienceRequired: integer("experience_required"),
  keyword: json("keyword")
    // .$type<QuantityProduct | BuyItemProduct>()
    .array()
    .notNull(),
  job_requirements: json("job_requirements")
    // .$type<>()
    .array()
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type InsertJobDescriptionModel = InferInsertModel<
  typeof jobDescriptionsSchema
>;
export type SelectJobDescriptionModel = InferSelectModel<
  typeof jobDescriptionsSchema
>;
