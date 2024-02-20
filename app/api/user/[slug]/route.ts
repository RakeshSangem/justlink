import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { auth } from '@/auth';

export const dynamic = 'force-dynamic';

// GET /api/user/[slug] - Get a user by their username
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  console.log('slug from api', slug);

  const user = await db.user.findUnique({
    where: { username: slug },
    include: { links: true },
  });

  console.log('user from api', user);

  if (!user) {
    return NextResponse.json('User not found', { status: 404 });
  }

  return NextResponse.json({ user });
}

// PUT /api/user/[slug] -
export const PUT = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  if (req.method === 'PUT') {
    try {
      const { slug } = params;

      const { name, avatar, username } = await req.json();

      const user = await db.user.findUnique({
        where: {
          username: slug,
        },
      });

      if (!user) {
        return NextResponse.json(
          { message: 'User not found!' },
          { status: 404 }
        );
      }

      const updatedUser = await db.user.update({
        where: {
          username: slug,
        },
        data: {
          ...(name && { name }),
          ...(avatar && { avatar }),
          ...(username && { username }),
        },
      });

      return NextResponse.json(
        { updatedUser, message: 'User updated successfully!' },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Error updating user!' },
        { status: 500 }
      );
    }
  }
};
