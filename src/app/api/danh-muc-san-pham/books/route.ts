import { NextResponse } from 'next/server';
import connect from '../../../../../server/database';
import Books from '../../../../../models/Books';

export const GET = async () => {
  try {
    await connect();
    const books: any = await Books.find();
    return new NextResponse(JSON.stringify(books), { status: 200 });
  } catch (err) {
    return new NextResponse('Database error', { status: 500 });
  }
};
