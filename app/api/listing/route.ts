import { NextResponse as api } from 'next/server';

export async function GET() {
    return api.json({
        message: 'Hello from Next.js API (App Router)'
    });
}
