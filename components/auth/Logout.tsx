'use client';

import { ReactNode } from 'react';

import { SessionProvider, signOut } from 'next-auth/react';
import Button from '../button/Button';
import { logout } from '@/lib/actions/logout';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/login',
    });
  };

  return <Button text="logout" variant="secondary" onClick={handleLogout} />;
}
