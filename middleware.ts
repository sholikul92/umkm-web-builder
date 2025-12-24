import { auth } from "./lib/auth.edge";
import { NextRequest, NextResponse } from "next/server";

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN!;
const DOMAINS = [ROOT_DOMAIN, "localhost"];

export default auth((req) => {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  const isRootDomain = DOMAINS.some((domain) => host.startsWith(domain));

  if (isRootDomain) {
    return NextResponse.next();
  }

  const subdomain = host.split(".")[0];

  const url = req.nextUrl.clone();
  url.pathname = `/site/${subdomain}${pathname}`;

  return NextResponse.rewrite(url);
});

export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  const subdomain = host.split(".")[0];

  if (subdomain !== "altwebsite" && subdomain !== "www" && !host.startsWith("localhost")) {
    url.pathname = `/site/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
