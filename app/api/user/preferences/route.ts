import { auth } from "@/auth";
import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// PUT /api/user/preferences - Update user preferences
export const PUT = auth(async (req) => {
  if (req.method === "PUT") {
    try {
      const authUser = req.auth?.user;

      const { theme } = await req.json();

      const user = await db.user.update({
        where: {
          email: authUser?.email as string,
        },
        data: {
          preferences: {
            update: {
              theme: Number(theme),
            },
          },
        },
        include: {
          preferences: true,
        },
      });

      return NextResponse.json(
        {
          user,
          message: "Preferences updated successfully!",
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: "Internal Server Error",
        },
        {
          status: 500,
        }
      );
    }
  }

  // Return a 405 Method Not Allowed response if the request method is not PUT
  return NextResponse.json(new Error("Method Not Allowed"), { status: 405 });
}) as any;
