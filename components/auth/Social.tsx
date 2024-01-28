'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Button } from '../button/Button';

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: '/dashboard',
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        text="Sign in with Google"
        variant="primary"
        onClick={() => onClick('google')}
      />
      <Button
        text="Sign in with GitHub"
        variant="primary"
        onClick={() => onClick('github')}
      />
    </div>
  );
};
