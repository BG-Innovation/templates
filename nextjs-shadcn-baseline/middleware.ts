import { NextResponse } from "next/server"
import { auth } from "./app/(auth)/auth"

export default auth((request) => {
    const isSignedIn = !!request.auth;
    const url = request.nextUrl;

    // Allow access to auth API routes
    if (url.pathname.startsWith("/api/auth") || url.pathname.startsWith("/api/signin")) {
      return NextResponse.next();
    }

    // Redirect unauthenticated users directly to signin API
    if (!isSignedIn) {
      const signinUrl = new URL("/api/signin", url);
      signinUrl.searchParams.set("callbackUrl", url.pathname + url.search);
      return NextResponse.redirect(signinUrl);
    }

    return NextResponse.next();
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}