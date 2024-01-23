import NextAuth, { Session } from 'next-auth';
import authConfig from './auth.config';
import connect from './db';
import User from './models/user.model';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: {},
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider === 'google') {
        try {
          const { name, email, image } = await user;
          await connect();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                image,
              }),
            });

            if (!res.ok) {
              throw new Error('Failed to create user');
            }
          }
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      if (account?.provider === 'github') {
        try {
          console.log('user from github', user);

          const { name, email, image } = await user;
          await connect();

          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                image,
              }),
            });

            if (!res.ok) {
              throw new Error('Failed to create user');
            }
          }

          return true;
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      return user;
    },
  },
});
