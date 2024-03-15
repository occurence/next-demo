CREATE TABLE IF NOT EXISTS "user_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" varchar(256) NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256),
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL
);
