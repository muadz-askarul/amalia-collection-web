import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    // Only apply to the owner catalog
    if (req.nextUrl.pathname.startsWith('/katalog-owner')) {
        const basicAuth = req.headers.get('authorization');

        if (basicAuth) {
            const authValue = basicAuth.split(' ')[1];
            // Decode base64
            const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');
            const expectedUser = process.env.USERNAME || 'owner';
            const expectedHash = process.env.PASSWORD;
            const salt = process.env.SALT || '';

            console.log(user === expectedUser);

            if (user === expectedUser && expectedHash) {
                // Use Web Crypto API available in Edge Runtime for hashing
                const encoder = new TextEncoder();
                const data = encoder.encode(pwd + salt);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

                console.log({ hashHex, expectedHash });

                if (hashHex === expectedHash) {
                    return NextResponse.next();
                }
            }
        }

        return new NextResponse('Auth Required.', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/katalog-owner/:path*'],
};
