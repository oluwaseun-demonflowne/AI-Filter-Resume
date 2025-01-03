CREATE TYPE "public"."match_status" AS ENUM('pending', 'reviewed', 'shortlisted', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('recruiter', 'candidate');--> statement-breakpoint
CREATE TABLE "job_descriptions" (
	"id" uuid DEFAULT gen_random_uuid(),
	"recruiter_id" uuid NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"location" varchar(255),
	"experience_required" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "job_descriptions_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid DEFAULT gen_random_uuid(),
	"file_url" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "matches" (
	"id" uuid DEFAULT gen_random_uuid(),
	"resume_id" uuid NOT NULL,
	"job_id" uuid NOT NULL,
	"match_percentage" real NOT NULL,
	"status" "match_status" DEFAULT 'pending',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "matches_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid DEFAULT gen_random_uuid(),
	"email" varchar(255) NOT NULL,
	"password_hash" varchar(255) NOT NULL,
	"full_name" varchar(255),
	"role" "user_role" NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "job_descriptions" ADD CONSTRAINT "job_descriptions_recruiter_id_users_id_fk" FOREIGN KEY ("recruiter_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_resume_id_user_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_job_id_job_descriptions_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job_descriptions"("id") ON DELETE cascade ON UPDATE no action;