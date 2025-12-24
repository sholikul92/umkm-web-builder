import { auth } from "./lib/auth.edge";
import { NextRequest, NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  const subdomain = host.split(".")[0];

  if (subdomain !== "altweb" && subdomain !== "www" && !host.startsWith("localhost")) {
    url.pathname = `/site/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
