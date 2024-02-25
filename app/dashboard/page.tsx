import PageClient from './page-client';
import LinksContainer from './LinksContainer';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect('/login');
    return;
  }

  return (
    <section className="relative max-w-7xl mx-auto px-2 sm:px-8 flex">
      <div className="py-10 flex flex-col gap-y-4 w-full lg:w-3/5">
        <MaxWidthWrapper>
          <PageClient />
          <LinksContainer />
        </MaxWidthWrapper>
      </div>
      <div className="mx-auto relative">
        {/* Mobile wrapper starts here */}
        {/* <div
          className="sticky left-0 w-[240px]  aspect-auto h-[460px] mt-10 rounded-[30px] p-2 border-black outline-2 outline outline-[#D8D8D8]/70 border-3 text-black"
          style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
        >
          <div className="bg-white h-full w-full flex flex-col gap-y-3 rounded-[23px] py-6 overflow-y-scroll">
            <div className="w-16 shrink-0 h-16 mx-auto rounded-full bg-gray-200"></div>

            <div className="text-center">
              <h1 className="text-black font-semibold text-lg">
                Rakesh Sangem
              </h1>
              <p className="text-black/50 font-light py-1 text-xs">
                Frontend developer from INDIA
              </p>
            </div>
            {links?.map((link: any) => (
              <a
                className="text-center text-xs font-medium w-5/6 mx-auto py-2 bg-black text-white rounded-full"
                key={link._id}
                target="_blank"
                href={link.url}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
