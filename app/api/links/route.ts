import { auth } from '@/auth';
import { db } from '@/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// GET /api/links - Get all links
export const GET = auth(async (req) => {
  const userInfo = req?.auth;

  console.log('userInfo', userInfo);

  try {
    if (!userInfo) {
      return NextResponse.json('Unauthorized', {
        status: 401,
      });
    }

    const userId = await db.user.findUnique({
      where: {
        email: userInfo?.user?.email as any,
      },
      select: {
        id: true,
      },
    });

    console.log('userId', userId);

    const links = await db.link.findMany({
      where: {
        userId: userId?.id,
      },
    });

    console.log('links router:', links);

    return NextResponse.json(links);
  } catch (error) {
    return NextResponse.json(`Internal Server Error:${error}`, { status: 500 });
  }
}) as any;

// POST /api/links - Create a new link
export const POST = auth(async (req) => {
  const userInfo = req?.auth;

  try {
    const body = await req.json();

    if (!userInfo) {
      return NextResponse.json('Unauthorized', {
        status: 401,
      });
    }

    const userId = await db.user.findUnique({
      where: {
        email: userInfo?.user?.email ?? undefined,
      },
      select: {
        id: true,
      },
    });

    const newLink = await db.link.create({
      data: {
        title: body.title,
        url: body.url,
        userId: userId?.id,
      },
    });

    return NextResponse.json(newLink, { status: 201 });
  } catch (error) {
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}) as any;
