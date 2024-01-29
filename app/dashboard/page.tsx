import PageClient from './page-client';
import LinksContainer from './LinksContainer';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/login');
    return null;
  }

  return (
    <section className="relative max-w-7xl mx-auto px-2 sm:px-8 flex">
      <div className="py-10 flex flex-col gap-y-4 w-full lg:w-3/5">
        <MaxWidthWrapper>
          <PageClient />
          <LinksContainer />
        </MaxWidthWrapper>
      </div>
      <div className="mx-auto relative"></div>
    </section>
  );
}
