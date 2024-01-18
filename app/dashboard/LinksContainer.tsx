'use client';

import LinkCard from '@/components/links/link';
import useLinks from '@/lib/swr/use-links';
import { Key } from 'react';

export default function LinksContainer() {
  const { links, isValidating } = useLinks();

  return (
    <div className="flex flex-col gap-y-3">
      {links?.map((link: any, idx: Key) => <LinkCard key={idx} link={link} />)}
    </div>
  );
}
