import { NextResponse } from 'next/server';

// GET /api - Hello from the API!
export async function GET() {
  try {
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
