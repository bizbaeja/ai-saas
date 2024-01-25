import { authMiddleware,redirectToSignIn  } from "@clerk/nextjs";
import {  NextResponse } from "next/server";


export default authMiddleware({
 
  publicRoutes:[
    "/",
    '/api/webhooks(.*)',
  ]
});
 
export const config = {
  matcher: ["/((?!#.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 