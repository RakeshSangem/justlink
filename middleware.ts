import { auth } from "@/auth";
import { NextResponse } from "next/server";

const publicRoutes = ["/login", "/register", "/"];

export default auth((req) => {
  const reqUrl = req.nextUrl;

  if (reqUrl.pathname.startsWith("/dashboard") && !req.auth) {
    return NextResponse.redirect(`${reqUrl.origin}/login`);
  }

  if (req.auth && publicRoutes.includes(reqUrl.pathname)) {
    return NextResponse.redirect(`${reqUrl.origin}/dashboard`);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
