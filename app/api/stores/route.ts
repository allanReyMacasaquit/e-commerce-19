import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

import { store } from '@/db/schema';
import db from '@/db/drizzle';

export async function POST(req: Request) {
	try {
		const { userId } = await auth(); // Get the userId from Clerk authentication
		const body = await req.json();
		const { name } = body;

		// Validate userId
		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		// Validate the input 'name'
		if (!name) {
			return new NextResponse('Name is required', { status: 400 });
		}

		// Use the schema reference to insert data into 'store'
		const newStore = await db.insert(store).values({
			name,
			userId,
		});

		return NextResponse.json(newStore); // Return the created store entry
	} catch (error) {
		console.error('STORE_POST_ERROR', error);
		return new NextResponse('Internal Server Error', { status: 500 });
	}
}
