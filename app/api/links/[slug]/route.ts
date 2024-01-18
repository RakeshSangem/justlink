import connect from '@/db';
import Link from '@/models/link.model';
import Error from 'next/error';

import { NextResponse } from 'next/server';

export async function GET({ linkId }: any) {
  try {
    const link = await Link.findById(linkId);

    if (!link) {
      return NextResponse.json('Link not found', { status: 404 });
    }

    return NextResponse.json(link);
  } catch (error) {
    NextResponse.json('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  await connect();

  const deletedLink = await Link.findOneAndDelete({ _id: slug });

  if (!deletedLink) {
    return NextResponse.json(
      { success: false, message: 'Link not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { success: true },
    {
      status: 200,
    }
  );
}

// create put endpoint
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const body = await request.json();

    await connect();

    const updatedLink = await Link.findOneAndUpdate(
      { _id: slug },
      { title: body.title, url: body.url }
    );

    if (!updatedLink) {
      return NextResponse.json(
        { success: false, message: 'Link not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, updatedLink },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    // Handle any errors and return a 500 status code
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
