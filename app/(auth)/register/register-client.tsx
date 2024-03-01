'use client';

import Button from '@/components/button/Button';
import { GitHubIcon } from '@/components/icons/GitHub';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function RegisterClient() {
  const [loadingGitHub, setLoadingGitHub] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  console.log('params', params.get('username'));

  console.log('router', router);

  const handleLogin = async (
    provider: string,
    setLoading: (loading: boolean) => void
  ) => {
    setLoading(true);
    await signIn(provider, {
      username: 'username',
      callbackUrl: `${window.location.origin}/dashboard`,
    });
    setLoading(false);
  };

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
          <Link
            href="/login"
            className="font-medium text-white/70 hover:text-white"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
