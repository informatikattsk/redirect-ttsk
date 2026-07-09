import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
    const targetUrl = 'https://trnava-vuc.sk'
    const path = request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname
    const redirectUrl = `${targetUrl}${path}`

    return NextResponse.redirect(redirectUrl, {
        status: 301,
    })
}

export const config = {
    matcher: '/:path*',
}
