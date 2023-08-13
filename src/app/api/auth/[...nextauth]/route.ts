import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '../../../../../server/database';
import User from '../../../../../models/User';
import bcrypt from 'bcryptjs';
const handler = NextAuth({
  providers: [
    // @ts-ignore
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({
            // @ts-ignore
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              // @ts-ignore
              credentials.password,
              user.password,
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: '/auth/sign-in',
  },
});

export { handler as GET, handler as POST };
