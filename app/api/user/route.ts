import { db } from '@/db';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

// get the user from the database
export const GET = auth(async (req) => {
  if (req.auth) {
    const user = await db.user.findUnique({
      where: {
        id: req.auth.user?.id,
      },
    });

    return NextResponse.json({ user });
  }
});

export async function POST(req: Request, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();

      console.log('body from route', body);

      const existingUser = await db.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (existingUser) {
        return NextResponse.json(
          {
            message: 'User already exists!',
          },
          { status: 400 }
        );
      }

      const user = await db.user.create({
        data: {
          name: body.name,
          email: body.email,
          avatar: body.image,
          username: body.username,
        },
      });

      return NextResponse.json(
        {
          user,
          message: 'User created successfully!',
        },
        {
          status: 201,
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: 'Internal Server Error' + error,
        },
        {
          status: 500,
        }
      );
    }
  }
}
