import connect from '../../../../server/database';
import TradingDiary from '../../../../models/TradingDiary';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connect();
    const Diary: any = await TradingDiary.find();
    return new NextResponse(JSON.stringify(Diary), { status: 201 });
  } catch (err) {
    return new NextResponse('Database error', { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    console.log('Received POST request:', req.body);

    await connect();

    const {
      date,
      symbol,
      type,
      volume,
      entry,
      stop_loss,
      take_profit,
      profit,
      notes,
    } = req.body;
    const newDiary = new TradingDiary({
      date,
      symbol,
      type,
      volume,
      entry,
      stop_loss,
      take_profit,
      profit,
      notes,
    });

    await newDiary.save();

    return new NextResponse('Entry added successfully', { status: 201 });
  } catch (err) {
    console.error(err);
    return new NextResponse('Error adding entry', { status: 500 });
  }
};
