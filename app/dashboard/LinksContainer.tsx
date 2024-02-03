'use client';

import LinkCard from '@/components/links/LinkCard';
import useLinks from '@/lib/swr/use-links';

export default function LinksContainer() {
  const { links, isValidating } = useLinks();

  return (
    <div className="flex flex-col gap-y-3">
      {isValidating || !links
        ? [...Array(3)].map((_, idx) => <LinkCardSkeleton key={idx} />)
        : links?.map((link: any) => <LinkCard key={link.id} link={link} />)}
    </div>
  );
}

function LinkCardSkeleton() {
  return (
    <div className="relative overflow-hidden isolate flex w-full items-start rounded-md bg-[#D9D9D9]/15 px-6 py-5 duration-300">
      <div className="absolute animate-shimmer left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-gray-200/10 to-transparent"></div>
      <div className="flex flex-1 flex-col gap-y-2 ">
        <div className="h-5 w-4/5 rounded-sm bg-[#D9D9D9]/5"></div>
        <div className="h-3 w-1/3 rounded-sm bg-[#D9D9D9]/5"></div>
      </div>
    </div>
  );
}
