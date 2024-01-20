'use client';

import { Key } from 'react';
import LinkCard from '@/components/links/LinkCard';
import useLinks from '@/lib/swr/use-links';

export default function LinksContainer() {
  const { links, isValidating } = useLinks();

  return (
    <div className="flex flex-col gap-y-3">
      {isValidating
        ? [...Array(5)].map((_, idx) => <LinkCardSkeleton key={idx} />)
        : links?.map((link: any, idx: Key) => (
            <LinkCard key={idx} link={link} />
          ))}
    </div>
  );
}

function LinkCardSkeleton() {
  return (
    <div className="isolate flex w-full items-start rounded-md bg-[#D9D9D9]/15 px-6 py-5 duration-300">
      <div className="flex flex-1 flex-col gap-y-2 ">
        <div className="h-5 w-4/5 rounded-sm bg-[#D9D9D9]/5"></div>
        <div className="h-3 w-1/3 rounded-sm bg-[#D9D9D9]/5"></div>
      </div>
    </div>
  );
}
