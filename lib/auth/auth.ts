import { auth } from '@/auth';
import type { Session, User } from 'next-auth';

export const currentUser = async (): Promise<User | null> => {
  const session = await auth();

  if (!session) {
    return null;
  }

  return session?.user as User;
};
