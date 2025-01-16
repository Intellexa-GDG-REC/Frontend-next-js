import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasAdminCookie = request.cookies.has("admin_auth_");
  if (request.nextUrl.pathname.startsWith("/admindashboard")) {
    if (!hasAdminCookie) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
  if (request.nextUrl.pathname === "/admin") {
    console.log("Admin page accessed");

    // Uncomment and add logic as needed
    // if (!hasAdminCookie) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/admindashboard/:path*","/admin/:path*"], 
};
