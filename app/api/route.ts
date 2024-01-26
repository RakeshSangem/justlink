import { NextResponse } from 'next/server';

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
