'use client';

import useLinks from '@/lib/swr/use-links';
import React from 'react';

const MobileDeviceMockup = () => {
  const { links, isValidating } = useLinks();

  return (
    <div className="relative mx-auto border-black outline-[0.5px] outline outline-white/50 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-black absolute outline-[0.5px] outline outline-white/50 -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-black absolute outline-[0.5px] outline outline-white/50 -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-black absolute outline-[0.5px] outline outline-white/50 -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
        <div className="pt-8 bg-black h-full overflow-y-auto">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-200"></div>

          <div className="text-center">
            <h1 className="text-white font-semibold text-xl">Rakesh Sangem</h1>
            <p className="text-white/50 font-light py-1 text-sm">
              Frontend developer from INDIA
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-5">
            {links?.map((link: any) => (
              <a
                className="text-center font-medium w-5/6 mx-auto py-2 bg-white text-black rounded-full"
                key={link._id}
                target="_blank"
                href={link.url}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDeviceMockup;
