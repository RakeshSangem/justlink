import { auth } from '@/auth';
import LoginClient from './login-client';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await auth();

  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <>
      <div className="border-b border-[#212121]/60 pb-2">
        <div className="mx-auto mb-6 h-10 w-10 rounded-full bg-gradient-to-bl from-blue-800 to-violet-900"></div>
        <h1 className="text-xl font-medium text-white/90">
          Sign in to JustLink
        </h1>
        <p className="py-1 text-sm text-gray-600">Glad to see you again!</p>
      </div>
      <LoginClient />
    </>
  );
}
