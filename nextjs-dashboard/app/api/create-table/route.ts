import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS "user_info" (
        "id" serial PRIMARY KEY NOT NULL,
        "employee_id" varchar(256),
        "first_name" varchar(256),
        "last_name" varchar(256),
        "email" varchar(256),
        "password" varchar(256)
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}