import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ID = searchParams.get('ID');
  const Employee_ID = searchParams.get('Employee_ID');
  const First_name = searchParams.get('First_name');
  const Last_name = searchParams.get('Last_name');
  const Email = searchParams.get('Email');
  const Password = searchParams.get('Password');
  const Image_URL = searchParams.get('Image_url');

  try {
    if (!ID || !Employee_ID || !First_name || !Last_name || !Email || !Password || !Image_URL) throw new Error('All details required');
    await sql`INSERT INTO user_info (ID, Employee_ID, First_name, Last_name, Email, Password, Image_URL) VALUES (
                                  ${ID}, ${Employee_ID}, ${First_name}, ${Last_name}, ${Email}, ${Password}, ${Image_URL});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const user = await sql`SELECT * FROM user_info;`;
  return NextResponse.json({ user }, { status: 200 });
}