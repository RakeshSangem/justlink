"use client";

import useLinks from "@/lib/swr/use-links";
import React, { memo } from "react";
import { usePathname } from "next/navigation";
import useUser from "@/lib/swr/useUser";

export default memo(function MobileDeviceMockup() {
  const { links } = useLinks();
  const { user } = useUser();
  const pathname = usePathname();

  if (pathname === "/dashboard/design" || pathname === "/dashboard") {
    return (
      <div className="h-[470px] w-[240px] shrink-0 m-10 rounded-[32px] border border-slate-700 bg-zinc-900 p-2 shadow-white/70 shadow-sm">
        <div className="relative flex h-full w-full flex-col gap-y-2 rounded-[24px] border-[0.2px] border-white/40 bg-white">
          {/* <div className="absolute left-1/2 right-1/2 top-1 h-4 w-16 -translate-x-1/2 transform rounded-full border-[0.5px] border-white/10 bg-black/95" /> */}
          <div className="text-center mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-10 h-w-10 rounded-full mx-auto border-2 border-black/10"
              src={user?.avatar || "/images/avatar.png"}
              alt="user avatar"
            />
            <h1 className="text-black font-semibold text-base">{user?.name}</h1>
            <p className="text-black/50 font-light py-1 text-xs">{user?.bio}</p>
          </div>
          <div className="flex flex-col mt-3 gap-y-2">
            {links?.map((link: any) => (
              <a
                className="text-center text-xs font-normal w-5/6 mx-auto px-3  p-2 bg-black text-white rounded-full"
                key={link.id}
                target="_blank"
                href={link.url}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
});
