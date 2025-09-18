import { NextResponse } from "next/server"
import { auth } from "./app/(auth)/auth"

export default auth((request) => {
  const { nextUrl } = request
  const isLoggedIn = !!request.auth

  // Public routes that don't require authentication
  const isPublicRoute = nextUrl.pathname === '/login' || 
                        nextUrl.pathname.startsWith('/api/auth')

  // If user is not logged in and trying to access protected route
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', nextUrl))
  }

  // If user is logged in and trying to access login page, redirect to home
  if (isLoggedIn && nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}