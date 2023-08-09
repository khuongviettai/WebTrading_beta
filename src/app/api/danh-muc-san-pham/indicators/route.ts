import { NextResponse } from 'next/server';
import connect from '../../../../../server/database';
import Indicators from '../../../../../models/Indicators';

export const GET = async () => {
  try {
    await connect();
    const indicators: any = await Indicators.find();
    return new NextResponse(JSON.stringify(indicators), { status: 200 });
  } catch (err) {
    return new NextResponse('Database error', { status: 500 });
  }
};
