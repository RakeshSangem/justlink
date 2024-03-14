"use client";

import React, { useState, useRef } from "react";
import type { User } from "next-auth";
import { logout } from "@/lib/actions/logout";
import Link from "next/link";

import LogOutIcon from "./icons/LogoutIcon";
import Gear from "./icons/Gear";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

interface UserInfoProps {
  user: User & {
    name: string;
    email: string;
    image: string | undefined;
  };
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative flex justify-between border border-white/40 rounded-full hover:bg-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user?.image}
            alt={user?.name}
            className="w-8 h-8 rounded-full"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="rounded-xl border-[0.5px] bg-black border-[#333333] px-4 py-3 text-white">
          <div className="m-2 text-start">
            <p className="font-normal text-white/80 truncate">{user?.name}</p>
            <p className="text-sm font-light text-white/60 truncate">
              {user?.email}
            </p>
          </div>
          <hr className="border-gray-700/30" />
          <div className="py-2 flex flex-col gap-y-1">
            <Link
              href="/dashboard/settings"
              className="group flex text-sm w-full items-center gap-x-3 rounded-md px-2 py-1 font-light text-white/70 hover:bg-[#1F1F23] hover:text-white"
            >
              <Gear className="group-hover:opacity-100 opacity-80 w-5 h-6" />
              Settings
            </Link>
            <button
              onClick={() => logout()}
              className="group flex text-sm w-full items-center gap-x-3 rounded-md px-2 py-1 font-light text-white/70 hover:bg-[#1F1F23] hover:text-white"
            >
              <LogOutIcon className="group-hover:opacity-100 opacity-80 w-5 h-6" />{" "}
              Logout
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
