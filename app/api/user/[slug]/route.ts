import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // find all the null username users
  const user = await db.user.findUnique({
    where: {
      username: slug,
    },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      username: true,
      links: true,
    },
  });

  if (!user) {
    return NextResponse.json('User not found', { status: 404 });
  }

  return NextResponse.json({ user });
}
