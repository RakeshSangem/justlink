import { db } from "@/db";
import { NextResponse } from "next/server";

// GET /api/links/[slug] - Get a single link
export async function GET({ linkId }: any) {
  try {
    const link = await db.link.findUnique({
      where: {
        id: linkId,
      },
    });

    if (!link) {
      return NextResponse.json("Link not found", { status: 404 });
    }

    return NextResponse.json(link);
  } catch (error) {
    NextResponse.json("Internal Server Error", { status: 500 });
  }
}

// DELETE /api/links/[slug] - Delete a link
export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const deletedLink = await db.link.delete({
    where: {
      id: slug,
    },
  });

  if (!deletedLink) {
    return NextResponse.json(
      { success: false, message: "Link not found" },
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

// PUT /api/links/[slug] - Update a link
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const body = await request.json();

    const updatedLink = await db.link.update({
      where: {
        id: slug,
      },
      data: {
        ...body,
      },
    });

    if (!updatedLink) {
      return NextResponse.json(
        { success: false, message: "Link not found" },
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

// export async function PATCH(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     const slug = params.slug;
//     const body = await request.json();

//     const updatedLink = await db.link.update({
//       where: {
//         id: slug,
//       },
//       data: {
//         ...body,
//       },
//     });

//     if (!updatedLink) {
//       return NextResponse.json(
//         { success: false, message: 'Link not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, updatedLink },
//       {
//         status: 200,
//       }
//     );
//   } catch (error: any) {
//     // Handle any errors and return a 500 status code
//     return NextResponse.json({ success: false, error }, { status: 500 });
//   }
// }
