import { NextResponse } from 'next/server';
import connect from '../../../../../../server/database';
import Indicators from '../../../../../../models/Indicators';

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Indicators.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
