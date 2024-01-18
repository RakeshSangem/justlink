import PageClient from './page-client';
import LinksContainer from './LinksContainer';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-8">
      <div className="py-10 flex flex-col gap-y-4 sm:w-1/2 w-full">
        <MaxWidthWrapper>
          <PageClient />
          <LinksContainer />
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
