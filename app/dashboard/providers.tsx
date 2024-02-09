import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

export default async function Providers({ children }: { children: ReactNode }) {
  const session = await auth();
  
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
