import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ID = searchParams.get('ID');
  const Employee_ID = searchParams.get('Employee_ID');
 
  try {
    if (!ID || !Employee_ID) throw new Error('Pet and owner names required');
    await sql`INSERT INTO user_info (ID, Employee_ID, First_name, Last_name, Email) VALUES (${ID}, ${Employee_ID});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const user = await sql`SELECT * FROM user_info;`;
  return NextResponse.json({ user }, { status: 200 });
}