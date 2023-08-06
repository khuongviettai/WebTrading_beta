import { NextResponse } from 'next/server';
import connect from '../../../../server/database';
import Course from '../../../../models/Course';

export const GET = async (request) => {
  try {
    await connect();
    const course = await Course.find();
    return new NextResponse(course, { status: 200 });
  } catch (err) {
    return new NextResponse('Database error', { status: 500 });
  }
};
