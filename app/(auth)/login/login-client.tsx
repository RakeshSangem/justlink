'use client';

import { useState } from 'react';
import Link from 'next/link';

import Button from '@/components/button/Button';
import { signIn } from 'next-auth/react';
import { GitHubIcon } from '@/components/icons/GitHub';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

export default function LoginClient() {
  const [loadingGitHub, setLoadingGitHub] = useState<boolean>(false);
  const [loadingGoogle, setLoadingGoogle] = useState<boolean>(false);

  async function handleLogin(
    provider: string,
    setLoading: (loading: boolean) => void
  ) {
    setLoading(true);

    await signIn(provider, {
      callbackUrl: `${window.location.origin}/dashboard`,
    });
    setLoading(false);
  }

  return (
    <div className="mt-4 flex flex-col gap-5 py-4 w-80">
      <Button
        loading={loadingGoogle}
        icon={<GoogleIcon />}
        text="Continue with Google"
        variant="primary"
        onClick={() => handleLogin('google', setLoadingGoogle)}
      />
      <Button
        loading={loadingGitHub}
        icon={<GitHubIcon />}
        text="Continue with GitHub"
        onClick={() => handleLogin('github', setLoadingGitHub)}
        variant="secondary"
      />
      <div>
        <p className="text-sm text-gray-500">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?{' '}
          <Link href="/register" className="font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
