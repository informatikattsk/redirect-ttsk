import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    // Define target URL
    const targetUrl = 'https://trnava-vuc.sk'
    
    // Preserve the original path if any
    const path = request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname
    
    // Create the full redirect URL
    const redirectUrl = `${targetUrl}${path}`
    
    // Perform redirect
    return NextResponse.redirect(redirectUrl, {
        status: 301
    })
}

// Configure which paths should be handled by middleware
export const config = {
    matcher: '/:path*'
} 