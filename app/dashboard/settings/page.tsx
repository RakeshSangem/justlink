import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import PageClient from './page-client';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect('/login');
    return;
  }
  return (
    <section className="relative max-w-7xl mx-auto px-2 sm:px-8 flex">
      <MaxWidthWrapper>
        <PageClient />
      </MaxWidthWrapper>
    </section>
  );
}
