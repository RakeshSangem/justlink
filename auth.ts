import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { db } from './db';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider === 'google') {
        try {
          console.log('user from google', user);

          const { name, email, image } = await user;
          const userExists = await db.user.findUnique({
            where: { email },
            select: {
              id: true,
            },
          });
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
                username: name.split(' ').join('').toLowerCase(),
              }),
            });
            if (!res.ok) {
              throw new Error('Failed to create user');
            }
          }
          console.log('userExists', userExists);
          return true;
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      if (account?.provider === 'github') {
        try {
          console.log('user from github', user);
          const { name, email, image } = await user;
          const userExists = await db.user.findUnique({
            where: { email },
          });
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
