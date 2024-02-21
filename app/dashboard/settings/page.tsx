import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import PageClient from './page-client';

export default async function Page() {
  return (
    <section className="relative max-w-7xl mx-auto px-2 sm:px-8 flex">
      <MaxWidthWrapper>
        <PageClient />
      </MaxWidthWrapper>
    </section>
  );
}
