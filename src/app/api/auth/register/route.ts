import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../../../models/User";
import connect from "../../../../../server/database";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  if (request.method !== "POST") {
    return response.status(405).end();
  }

  const { name, email, password } = request.body;

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return response.status(201).json({ message: "User has been created" });
  } catch (err) {
    const errorMessage = (err as Error).message;
    return response.status(500).json({ error: errorMessage });
  }
};
