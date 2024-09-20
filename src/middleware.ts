import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware } from "@clerk/nextjs/server";

// Clerk's middleware should handle requests first
export default function middleware(request: NextRequest, event: any) {
    // Pass the required event parameter to clerkMiddleware
    return clerkMiddleware()(request, event);
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
