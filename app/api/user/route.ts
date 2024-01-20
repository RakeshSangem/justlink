import User from '@/models/user.model';
import { NextRequest, NextResponse } from 'next/server';
import connect from '@/db';

// get the user from the database






export async function POST(req: Request, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      await connect();
      const body = await req.json();

      console.log('body from route', body);

      const existingUser = await User.findOne({ email: body.email });

      if (existingUser) {
        return NextResponse.json(
          {
            message: 'User already exists!',
          },
          { status: 400 }
        );
      }

      const user = await User.create(body);

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
