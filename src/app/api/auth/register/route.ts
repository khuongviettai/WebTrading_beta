import User from '../../../../../models/User';
import connect from '../../../../../server/database';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (req: any, res: any) => {
  const { name, email, password } = await req.json();

  await connect();

  // Check if the email already exists in the database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse('Email already exists', {
      status: 400,
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User has been created', {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
