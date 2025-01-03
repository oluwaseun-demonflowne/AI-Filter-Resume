import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { varchar, timestamp, pgTable, pgEnum, uuid } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["recruiter", "candidate"]);
export const userSchema = pgTable("users", {
  id: uuid("id").defaultRandom().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  fullName: varchar("full_name", { length: 255 }),
  role: userRoleEnum("role").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type InsertUserModel = InferInsertModel<typeof userSchema>;
export type SelectUserModel = InferSelectModel<typeof userSchema>;
