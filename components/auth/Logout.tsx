'use client';

import { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';
import { Button } from '../button/Button';
import { logout } from '@/lib/actions/logout';

export default function Logout() {
  return <Button text="logout" variant="secondary" onClick={() => logout()} />;
}
