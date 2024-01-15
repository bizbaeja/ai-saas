import { authMiddleware,redirectToSignIn  } from "@clerk/nextjs";
import {  NextResponse } from "next/server";


export default authMiddleware({
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // Redirect logged in users to organization selection page if they are not active in an organization
    if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== "/"
    ) {
      const orgSelection = new URL("/", req.url);
      return NextResponse.redirect(orgSelection);
    }
    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
  publicRoutes:[
    "/",
    '/api/webhooks(.*)',
  ]
});
 
export const config = {
  matcher: ["/((?!#.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 