import connect from '@/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connect();
    return new NextResponse('Hello from the API!', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.log(error);
  }
}
