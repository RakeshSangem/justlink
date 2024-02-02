import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { auth } from '@/auth';

// GET /api/user/[slug] - Get a user by their username
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
