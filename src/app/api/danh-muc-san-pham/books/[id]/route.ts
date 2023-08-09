import { NextResponse } from 'next/server';
import connect from '../../../../../../server/database';
import Books from '../../../../../../models/Books';

// @ts-ignore
export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const book = await Books.findById(id);

    return new NextResponse(JSON.stringify(book), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
