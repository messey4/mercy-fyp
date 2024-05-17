import { NextResponse } from "next/server";
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
export default function middleware(request) {
  const cookieJar = request.cookies;
  const allowAccess = cookieJar.get("accessToken");
  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/bvn-search", "/fi-bot", "/apply-loan"];
  console.log(pathname);
  if (protectedRoutes.includes(pathname) && !allowAccess) {
    return NextResponse.redirect(
      `${request.nextUrl.origin}/sign-in?cb=${pathname}`
    );
  } else {
    return NextResponse.next();
  }
}
