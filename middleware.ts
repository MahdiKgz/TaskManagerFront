import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("sessionToken")?.value
  const isAuthenticated = !!sessionToken

  const currentPath = request.nextUrl.pathname

  const publicPaths = ["/"]
  const authPaths = ["/login", "/register"]

  const isAuthPath = authPaths.includes(currentPath)
  const isPublicPath = publicPaths.includes(currentPath)

  if (isAuthenticated) {
    if (isAuthPath) {
      const redirectUrl = new URL("/dashboard", request.url)
      redirectUrl.searchParams.set("toastMessage", "alreadyLoggedIn") 
      return NextResponse.redirect(redirectUrl)
    }
    return NextResponse.next()
  } else {
    if (!isAuthPath && !isPublicPath) {
        const redirectUrl = new URL("/login", request.url)
      redirectUrl.searchParams.set("toastMessage", "mustLoggedIn") 
      return NextResponse.redirect(redirectUrl)
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard"],
}
