import { db } from '@/db';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

// GET /api/user - Get the current user
export const GET = auth(async (req) => {
  if (req.auth) {
    try {
      const authUser = await req.auth?.user;

      const user = await db.user.findUnique({
        where: { email: authUser?.email as string },
      });

      return NextResponse.json({ user });
    } catch (error) {
      return NextResponse.json(
        {
          error,
          message: 'Internal Server Error',
        },
        {
          status: 500,
        }
      );
    }
  }
}) as any;

// POST /api/user - Create a new user
export const POST = auth(async (req) => {
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

  // Return a 405 Method Not Allowed response if the request method is not POST
  return NextResponse.json(new Error('Method Not Allowed'), { status: 405 });
}) as any;

// PUT /api/user - Edit the current user
export const PUT = auth(async (req) => {
  if (req.method === 'PUT') {
    try {
      const authUser = await req.auth?.user;
      console.log('authUser', authUser);

      const { name, bio, username } = await req.json();

      const user = await db.user.update({
        where: {
          email: authUser?.email as string,
        },
        data: {
          ...(name && { name }),
          ...(bio && { bio }),
          ...(username && { username }),
        },
      });

      return NextResponse.json(
        {
          user,
          message: 'User updated successfully!',
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: 'Internal Server Error',
        },
        {
          status: 500,
        }
      );
    }
  }

  // Return a 405 Method Not Allowed response if the request method is not PUT
  return NextResponse.json(new Error('Method Not Allowed'), { status: 405 });
}) as any;
