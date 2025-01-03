ALTER TABLE "job_descriptions" ADD COLUMN "keyword" json[] NOT NULL;--> statement-breakpoint
ALTER TABLE "job_descriptions" ADD COLUMN "job_requirements" json[] NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "portfolio_url" varchar(255) NOT NULL;